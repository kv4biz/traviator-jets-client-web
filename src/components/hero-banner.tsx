"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { content } from "@/content";
import { Button } from "@/components/ui/button";
import { zoomIn, bounce } from "@/motion/presets";

export function HeroBanner() {
  const { hero } = content.home;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % hero.images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [hero.images.length]);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden -mt-16 md:-mt-20">
      {/* Background images with zoom + crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={zoomIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute inset-0"
        >
          <Image
            src={hero.images[currentIndex]}
            alt="Hero background"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary/85" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center lg:justify-normal md:mt-40 px-4 text-center  text-white">
        {/* Eyebrow / subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-2 text-sm tracking-widest text-white/80 md:text-base"
        >
          {hero.eyebrow}
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-6 uppercase max-w-4xl text-7xl md:text-[7.3rem] font-semibold tracking-tight  lg:leading-none"
        >
          {hero.title}
        </motion.h1>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col gap-8 sm:flex-row"
        >
          <Button asChild size="lg" variant="outline">
            <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
          </Button>
        </motion.div>
      </div>

      {/* Bouncing jet image - fixed large size, centered, z-40 */}
      <motion.div
        animate={bounce}
        className="absolute bottom-0 left-1/2 z-40 -translate-x-1/2 translate-y-1/2 overflow-hidden"
      >
        <Image
          src={hero.jetImage}
          alt="Jet"
          width={1920}
          height={500}
          className="h-auto min-w-480 object-cover object-center"
        />
      </motion.div>
    </section>
  );
}
