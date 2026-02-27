"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import { content } from "@/content";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export function TestimonialsSection() {
  const { testimonials } = content.home;

  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="mx-auto w-full container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="subtitle">{testimonials.subtitle}</span>
          <h2 className="title mt-2 max-w-2xl">{testimonials.title}</h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.items.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="pl-4 basis-full lg:basis-1/2"
              >
                <div className="bg-white p-6 shadow-lg h-full flex flex-col">
                  {/* Image + Quote on TOP */}
                  <div className="flex justify-between w-full items-start gap-3 mb-4">
                    {/* Profile Image */}
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Quote Badge */}
                    <div className="bg-primary p-3 rounded-full">
                      <Quote className="h-5 w-5 text-accent fill-secondary" />
                    </div>
                  </div>

                  {/* Message */}
                  <p className="text-foreground/80 text-base leading-relaxed grow">
                    &ldquo;{testimonial.message}&rdquo;
                  </p>

                  <div className="flex justify-between w-full items-center gap-3">
                    {/* Stars */}
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-accent text-accent"
                          />
                        ),
                      )}
                    </div>

                    {/* Name and Role */}
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center gap-2 mt-6">
            <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-none border-2" />
            <CarouselNext className="static translate-y-0 h-12 w-12 rounded-none border-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
