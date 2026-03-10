"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { content } from "@/content";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

export function ServicesSection() {
  const { servicesSection } = content.home;
  const [api, setApi] = useState<CarouselApi>();

  const onSelect = useCallback(() => {
    if (!api) return;
  }, [api]);

  useEffect(() => {
    if (!api) return;

    onSelect();
    api.on("select", onSelect);

    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => {
      api.off("select", onSelect);
      clearInterval(autoplay);
    };
  }, [api, onSelect]);

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto w-full container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="subtitle">{servicesSection.subtitle}</span>
          <h2 className="title mt-2 max-w-xl mx-auto">
            {servicesSection.title}
          </h2>
        </motion.div>

        {/* Services Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {servicesSection.items.map((service) => (
              <CarouselItem
                key={service.title}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Link href={service.href} className="block group h-full">
                  {/* Image Container */}
                  <div className="relative w-full h-80 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Info Box - Overlapping with negative margin */}
                  <div className="relative z-10 -mt-16 mr-6 bg-accent p-4 py-8 lg:py-12 min-h-[180px]">
                    {/* Arrow Button - Top Right */}
                    <div className="absolute -top-5 right-0 bg-secondary p-3 mt-2 mr-6 transition-colors group-hover:bg-primary">
                      <ArrowRight className="h-5 w-5 text-white group-hover:text-white" />
                    </div>

                    {/* Content */}
                    <span className="text-xs font-medium uppercase tracking-wider text-background">
                      {service.label}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-background line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex -left-4" />
          <CarouselNext className="hidden lg:flex -right-4" />
        </Carousel>
      </div>
    </section>
  );
}
