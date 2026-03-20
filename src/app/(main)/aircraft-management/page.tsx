"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoCheckmark } from "react-icons/io5";
import { Phone } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { content } from "@/content";

export default function AircraftManagementPage() {
  const { aircraftManagement } = content;
  return (
    <>
      {/* Section 1: Hero Banner */}
      <PageBanner
        title={aircraftManagement.hero.title}
        subtitle={aircraftManagement.hero.subtitle}
        breadcrumb="Aircraft Management"
      />

      {/* Section 2: Managed Fleet */}
      <section className="mx-auto w-full container px-4 py-16 md:py-24">
        {/* Fleet Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          {/* Header with Title and Carousel Controls */}
          <div className="flex items-center justify-between gap-6 mb-8">
            {/* Title Only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="subtitle">
                {aircraftManagement.managedFleet.subtitle}
              </span>
              <h2 className="title mt-2">
                {aircraftManagement.managedFleet.title}
              </h2>
            </motion.div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-2">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 rounded-none border-2" />
              <CarouselNext className="static translate-y-0 h-10 w-10 rounded-none border-2" />
            </div>
          </div>
          <div className="border-b border-border mb-8" />

          <CarouselContent>
            {aircraftManagement.managedFleet.aircraft.map((aircraft, index) => (
              <CarouselItem key={index} className="basis-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col lg:flex-row lg:items-stretch gap-6"
                >
                  {/* Aircraft Image - 4/5 width on large screens */}
                  <div className="relative h-72 md:h-80 lg:h-[500px] w-full lg:w-4/5 overflow-hidden rounded-lg">
                    <Image
                      src={aircraft.image}
                      alt={aircraft.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Aircraft Details - 1/5 width on large screens, stacked on mobile/tablet */}
                  <div className="w-full lg:w-1/5 flex flex-col justify-center space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                        {aircraft.category}
                      </p>
                      <h3 className="text-xl font-bold text-foreground mt-1">
                        {aircraft.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {aircraft.manufacturer}
                      </p>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Passengers
                        </span>
                        <span className="text-foreground font-medium">
                          {aircraft.capacity}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Baggage</span>
                        <span className="text-foreground font-medium">
                          {aircraft.baggage}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Range</span>
                        <span className="text-foreground font-medium">
                          {aircraft.range}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Speed</span>
                        <span className="text-foreground font-medium">
                          {aircraft.speed}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Availability
                        </span>
                        <span className="text-foreground font-medium">
                          {aircraft.availability}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Section 2b: Fleet Description Bar */}
      <section className="bg-secondary border-l-4 border-accent mx-auto container w-full">
        <div className="p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {aircraftManagement.managedFleet.description.map(
              (paragraph, index) => (
                <p key={index} className="text-white text-sm leading-relaxed">
                  {paragraph}
                </p>
              ),
            )}
          </motion.div>
        </div>
      </section>

      {/* Section 3: Comprehensive Management Services */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
        <div className="flex flex-col gap-10 md:flex-row md:items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="subtitle">
              {aircraftManagement.services.subtitle}
            </span>
            <h2 className="title mt-2">{aircraftManagement.services.title}</h2>
            <p className="description mt-6">
              {aircraftManagement.services.description}
            </p>

            {/* Benefits List */}
            <ul className="mt-8 space-y-3">
              {aircraftManagement.services.benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent">
                    <IoCheckmark className="h-3 w-3 text-accent-foreground" />
                  </span>
                  <span className="text-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Call Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex h-full min-h-96 flex-col items-center justify-between overflow-hidden p-8"
          >
            {/* Background Image */}
            <Image
              src="/call-card-img.jpg"
              alt="Call us"
              fill
              className="object-cover"
            />
            {/* Accent Overlay */}
            <div className="absolute inset-0 bg-accent/80" />

            {/* Top Content */}
            <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center">
              {/* Phone Icon */}
              <div className="mb-6 flex h-24 w-24 items-center justify-center bg-white/25 rounded-full">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary transition-colors hover:bg-white group">
                  <Phone className="h-6 w-6 text-white group-hover:text-primary transition-colors" />
                </div>
              </div>
              {/* Description Text */}
              <p className="text-xl font-semibold text-background">
                {aircraftManagement.callCard.topText}
              </p>
              <p className="text-3xl max-w-md font-bold text-secondary">
                {aircraftManagement.callCard.mainText}
              </p>
            </div>

            {/* Bottom Content - Call Info */}
            <div className="relative z-10 mt-auto pt-6 text-center">
              <p className="text-sm font-medium uppercase text-background/70">
                {aircraftManagement.callCard.bottomLabel}
              </p>
              <p className="mt-1 text-xl font-bold text-secondary">
                {content.brand.banner.phone}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: CTA Banner */}
      <section className="relative bg-accent py-16 lg:py-24 overflow-hidden">
        {/* Dot Pattern - Bottom Left */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-48 h-48 lg:w-64 lg:h-64 opacity-30 pointer-events-none"
        >
          <Image
            src="/dot-pattern.png"
            alt="Dot pattern"
            fill
            className="object-cover object-bottom-left"
          />
        </motion.div>

        {/* Animated Jet Stack - Right */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 right-0 w-64 h-48 lg:w-96 lg:h-64 opacity-30 pointer-events-none"
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/stack-jet-location.png"
            alt="Jet stack"
            fill
            className="object-cover object-right"
          />
        </motion.div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-between gap-6 md:flex-row"
          >
            <div>
              <h2 className="title-cta text-background text-center md:text-left">
                {aircraftManagement.cta.title}
              </h2>
              <p className="mt-2 text-background/80 text-center md:text-left">
                {aircraftManagement.cta.description}
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-secondary text-white hover:bg-secondary/90"
            >
              <Link href={aircraftManagement.cta.buttonHref}>
                {aircraftManagement.cta.buttonText}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
