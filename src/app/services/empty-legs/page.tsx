"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";
import { EmptyLegsDealsSection } from "@/components/empty-legs-deals-section";

export default function EmptyLegsServicePage() {
  return (
    <>
      {/* Section 1: Page Banner */}
      <PageBanner title="Empty Legs" breadcrumb="Empty Legs" />

      {/* Section 2: Intro */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="font-medium uppercase tracking-wider text-accent">
              Empty Legs
            </span>
            <h2 className="mt-2 heading-xl">Fly Smart with Empty Legs</h2>
            <p className="mt-6 text-primary">
              Empty leg flights are one-way trips that occur when a private jet
              needs to reposition for its next booking. These flights offer
              significant savings on luxury travel.
            </p>
            <p className="mt-4 text-muted-foreground">
              Take advantage of discounted rates on premium aircraft. Our empty
              leg inventory is constantly updated, giving you access to
              last-minute deals on routes worldwide.
            </p>
          </motion.div>
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
                src="/service-page-2.jpg"
                alt="Empty Legs Service"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Statement Bar */}
      <section className="bg-primary border-l-4 border-accent mx-auto w-full max-w-4xl">
        <div className="p-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-base text-white md:text-lg"
          >
            Save up to 75% on private jet travel with our empty leg flights.
            Smart travelers choose repositioning flights for unbeatable value.
          </motion.p>
        </div>
      </section>

      {/* Section 4: Empty Leg Deals */}
      <EmptyLegsDealsSection />

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
            <h2 className="text-center text-2xl font-bold text-primary md:text-left md:text-3xl">
              It&apos;s Time to Fly with Traviator Jets
            </h2>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Link href="/contact">Book Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
