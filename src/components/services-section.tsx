"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { content } from "@/content";

export function ServicesSection() {
  const { servicesSection } = content.home;

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

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesSection.items.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={service.href} className="block">
                {/* Image Container */}
                <div className="relative w-full h-80 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500  group-hover:scale-105"
                  />
                </div>

                {/* Info Box - Overlapping with negative margin */}
                <div className="relative z-10 -mt-16 mr-6 bg-accent p-4 py-8 lg:py-12 shadow-">
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
                  <p className="mt-2 text-sm text-background">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
