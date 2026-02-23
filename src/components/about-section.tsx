"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IoCall, IoCheckmark, IoStar, IoArrowForward } from "react-icons/io5";

import { content } from "@/content";
import { Button } from "@/components/ui/button";

function useCountUp(end: number, duration: number = 2000, inView: boolean) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, inView]);

  return count;
}

export function AboutSection() {
  const { aboutSection } = content.home;
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  const statsNumber = parseInt(
    aboutSection.stats.number.replace(/[^0-9]/g, ""),
    10,
  );
  const animatedCount = useCountUp(statsNumber, 2000, isInView);
  const suffix = aboutSection.stats.number.includes("+") ? "+" : "";

  return (
    <section className="relative overflow-hidden bg-background section-padding-y">
      <div className="mx-auto w-full md:max-w-10/12 container-padding-x">
        {/* Row 1: About Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            {/* Subtitle */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              {aboutSection.subtitle}
            </p>

            {/* Title */}
            <h2 className="heading-xl mb-6">{aboutSection.title}</h2>

            {/* Description */}
            <p className="mb-6 text-muted-foreground leading-relaxed">
              {aboutSection.description}
            </p>

            {/* Checkmark List */}
            <ul className="mb-8 space-y-3">
              {aboutSection.list.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent">
                    <IoCheckmark className="h-3 w-3 text-accent-foreground" />
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {/* Primary Button */}
              <Button asChild size="lg">
                <Link href={aboutSection.primaryCta.href}>
                  {aboutSection.primaryCta.label}
                </Link>
              </Button>

              {/* Phone CTA */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                  <IoCall className="h-5 w-5 text-accent-foreground" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">
                    {aboutSection.phoneCta.label}
                  </span>
                  <span className="font-semibold text-foreground">
                    {aboutSection.phoneCta.phone}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image with Decorations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Background Box - simple rectangle offset to right and bottom */}
            <div className="absolute right-0 bottom-0 -translate-x-4 translate-y-6 w-full h-full bg-accent z-10" />

            {/* Main Image Container */}
            <div className="relative h-140 w-full overflow-hidden z-10">
              <Image
                src={aboutSection.image}
                alt="About Traviator Jets"
                fill
                className="object-cover"
              />
            </div>

            {/* Stats Overlay Box - positioned to the right, overlapping image edge */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -right-4 top-2/3 -translate-y-1/2 z-30 bg-primary px-6 py-4 shadow-lg lg:-right-28"
            >
              {/* Stars */}
              <div className="mb-2 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <IoStar key={i} className="h-4 w-4 text-accent" />
                ))}
              </div>

              {/* Number with counting animation */}
              <p className="text-3xl font-bold text-white">
                {animatedCount.toLocaleString()}
                {suffix}
              </p>

              {/* Label */}
              <p className="text-sm text-white/80">
                {aboutSection.stats.label}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Row 2: Promotional Cards */}
        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Card 1 - Discount (2/3 width on large screens) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden p-8 lg:col-span-2 lg:p-12 lg:h-105 cursor-pointer"
            style={{
              backgroundColor: "#000515",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='24' viewBox='0 0 88 24'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='autumn' fill='%23ffffff' fill-opacity='0.06'%3E%3Cpath d='M10 0l30 15 2 1V2.18A10 10 0 0 0 41.76 0H39.7a8 8 0 0 1 .3 2.18v10.58L14.47 0H10zm31.76 24a10 10 0 0 0-5.29-6.76L4 1 2 0v13.82a10 10 0 0 0 5.53 8.94L10 24h4.47l-6.05-3.02A8 8 0 0 1 4 13.82V3.24l31.58 15.78A8 8 0 0 1 39.7 24h2.06zM78 24l2.47-1.24A10 10 0 0 0 86 13.82V0l-2 1-32.47 16.24A10 10 0 0 0 46.24 24h2.06a8 8 0 0 1 4.12-4.98L84 3.24v10.58a8 8 0 0 1-4.42 7.16L73.53 24H78zm0-24L48 15l-2 1V2.18A10 10 0 0 1 46.24 0h2.06a8 8 0 0 0-.3 2.18v10.58L73.53 0H78z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          >
            <div className="relative z-10 flex flex-col gap-4 lg:gap-10 items-start">
              <h3 className="heading-md mb-4 text-white text-5xl transition-all duration-300 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_rgba(224,212,45,0.6)]">
                {aboutSection.promoCards.discount.title}
              </h3>
              <p className="mb-6 max-w-xl text-2xl text-white/80">
                {aboutSection.promoCards.discount.description}
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link href={aboutSection.promoCards.discount.cta.href}>
                  {aboutSection.promoCards.discount.cta.label}
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Card 2 - Exclusive Offers (1/3 width on large screens) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden cursor-pointer h-105"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={aboutSection.promoCards.offers.image}
                alt={aboutSection.promoCards.offers.title}
                fill
                className="object-cover"
              />
              {/* Default Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-primary/40 via-primary/20 to-transparent" />
              {/* Hover Overlay - dark blue translucent */}
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Icon Button - top right with padding */}
            <div className="absolute top-6 right-6 z-20">
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 group-hover:scale-110">
                <IoArrowForward className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full min-h-70 flex-col justify-end p-6 lg:p-8">
              <h3 className="heading-sm text-white">
                {aboutSection.promoCards.offers.title}
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
