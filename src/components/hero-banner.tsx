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
    <section className="relative h-screen w-full overflow-hidden">
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
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        {/* Eyebrow / subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-2 text-sm uppercase tracking-widest text-white/80 md:text-base"
        >
          {hero.eyebrow}
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
        >
          {hero.title}
        </motion.h1>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <Button asChild size="lg">
            <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
          </Button>
        </motion.div>
      </div>

      {/* Bouncing jet image - positioned to overflow into next section */}
      <motion.div
        animate={bounce}
        className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 translate-y-1/2"
      >
        <Image
          src={hero.jetImage}
          alt="Jet"
          width={200}
          height={100}
          className="h-auto w-32 md:w-48 lg:w-56"
        />
      </motion.div>
    </section>
  );
}
