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
    <div className="relative -mt-16 md:-mt-18 h-screen md:h-[85vh] w-full overflow-hidden bg-black">
      <div className="relative h-full w-full overflow-hidden">
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

        {/* Full-screen dark overlay */}
        <div className="absolute inset-0 bg-black/30 z-[5]" />

        {/* Top-left triangle overlay - slide in from left with blur */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="absolute top-0 left-0 w-1/2 lg:w-1/3 h-1/3 lg:h-2/3 bg-gradient-to-br from-black/10 via-black/20 to-white/20 z-10 blur-[1px]"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />

        {/* Bottom-right triangle overlay - slide in from right with blur */}
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="absolute bottom-0 right-0 w-1/2 lg:w-1/2 h-1/3 lg:h-full bg-gradient-to-tl from-black/20 via-black/10 to-white/20 z-10 blur-[1px]"
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
        />

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center text-white">
          {/* Eyebrow */}
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
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="title-hero mb-6 max-w-6xl"
          >
            {hero.title}
          </motion.h1>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-8"
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
      </div>
    </div>
  );
}
