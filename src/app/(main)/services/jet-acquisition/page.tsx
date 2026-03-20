"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoCheckmark } from "react-icons/io5";
import { Phone } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";
import { content } from "@/content";

export default function JetAcquisitionPage() {
  const { jetAcquisition } = content;
  return (
    <>
      {/* Section 1: Hero Banner */}
      <PageBanner
        title={jetAcquisition.hero.title}
        subtitle={jetAcquisition.hero.subtitle}
        breadcrumb="Jet Acquisition"
      />

      {/* Section 2: What Jet Acquisition Means */}
      <section className="mx-auto w-full container px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute bottom-4 -right-4 h-5/6 w-full bg-accent" />
            <div className="relative overflow-hidden">
              <Image
                src={jetAcquisition.whatAcquisitionMeans.image}
                alt="Jet Acquisition"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="subtitle">
              {jetAcquisition.whatAcquisitionMeans.subtitle}
            </span>
            <h2 className="title mt-2">
              {jetAcquisition.whatAcquisitionMeans.title}
            </h2>
            <div className="mt-6 space-y-4">
              {jetAcquisition.whatAcquisitionMeans.description.map(
                (paragraph, index) => (
                  <p key={index} className="description">
                    {paragraph}
                  </p>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Ownership, Simplified (Accent Box) */}
      <section className="bg-secondary border-l-4 border-accent mx-auto container w-full">
        <div className="p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white text-sm leading-relaxed">
              {jetAcquisition.ownershipSimplified.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Our Acquisition Approach */}
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
              {jetAcquisition.acquisitionApproach.subtitle}
            </span>
            <h2 className="title mt-2">
              {jetAcquisition.acquisitionApproach.title}
            </h2>
            <p className="description mt-6">
              {jetAcquisition.acquisitionApproach.description}
            </p>

            {/* Capabilities List */}
            <ul className="mt-8 space-y-3">
              {jetAcquisition.acquisitionApproach.capabilities.map(
                (capability, index) => (
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
                    <span className="text-foreground">{capability}</span>
                  </motion.li>
                )
              )}
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
                {jetAcquisition.callCard.topText}
              </p>
              <p className="text-3xl max-w-md font-bold text-secondary">
                {jetAcquisition.callCard.mainText}
              </p>
            </div>

            {/* Bottom Content - Call Info */}
            <div className="relative z-10 mt-auto pt-6 text-center">
              <p className="text-sm font-medium uppercase text-background/70">
                {jetAcquisition.callCard.bottomLabel}
              </p>
              <p className="mt-1 text-xl font-bold text-secondary">
                {content.brand.banner.phone}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: CTA Banner */}
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
                {jetAcquisition.cta.title}
              </h2>
              <p className="mt-2 text-background/80 text-center md:text-left">
                {jetAcquisition.cta.description}
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-secondary text-white hover:bg-secondary/90"
            >
              <Link href={jetAcquisition.cta.buttonHref}>
                {jetAcquisition.cta.buttonText}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
