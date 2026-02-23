"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";
import { CharterFormSection } from "@/components/charter-form-section";

export default function CharterServicePage() {
  return (
    <>
      {/* Section 1: Page Banner */}
      <PageBanner title="Jet Chartering" breadcrumb="Jet Chartering" />

      {/* Section 2: Intro (About-style, flipped - image first) */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Text Second */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="font-medium uppercase tracking-wider text-accent">
              Charter Service
            </span>
            <h2 className="mt-2 heading-xl">The Best Private Jets Charter</h2>
            <p className="mt-6 text-primary">
              Experience unparalleled luxury and convenience with our premium
              private jet charter services. We offer a seamless booking process
              and access to a diverse fleet of aircraft.
            </p>
            <p className="mt-4 text-muted-foreground">
              Whether you&apos;re traveling for business or leisure, our
              dedicated team ensures every detail is handled with precision.
              From departure to arrival, enjoy personalized service tailored to
              your unique needs.
            </p>
          </motion.div>
          {/* Image First */}
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
                src="/service-page-1.jpg"
                alt="Jet Charter Service"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Quality Statement Bar */}
      <section className="bg-primary border-l-4 border-accent mx-auto w-full max-w-4xl">
        <div className="p-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-base text-white md:text-lg"
          >
            We stand for quality, safety, and credibility. Trust us fully with
            private jets chartering and our work process.
          </motion.p>
        </div>
      </section>

      {/* Section 4: Charter Form + Call Card */}
      <CharterFormSection />

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
