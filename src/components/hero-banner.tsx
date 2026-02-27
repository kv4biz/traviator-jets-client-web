"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { content } from "@/content";
import { Button } from "@/components/ui/button";
import { zoomIn } from "@/motion/presets";

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
    <div className="relative -mt-16 md:-mt-18 overflow-x-clip">
      <section className="relative h-[75vh] w-full overflow-hidden">
        {/* Background images with zoom + crossfade */}
        <AnimatePresence mode="sync">
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
        <div className="absolute inset-0 bg-secondary/65" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center mt-64 md:mt-40 px-4 text-center text-white">
          {/* Eyebrow / subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-2 text-sm tracking-widest text-white/80 md:text-base"
          >
            {hero.eyebrow}
          </motion.p>

          {/* Title - comes from top */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="title-hero mb-6 max-w-4xl"
          >
            {hero.title}
          </motion.h1>

          {/* CTAs - come from bottom */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-8 "
          >
            <Button asChild size="lg">
              <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
