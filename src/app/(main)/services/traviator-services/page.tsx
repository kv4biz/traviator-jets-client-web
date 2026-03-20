"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoCheckmark } from "react-icons/io5";
import { Phone } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";
import { content } from "@/content";

export default function TraviatorServicesPage() {
  const { traviatorServices } = content;
  const [activeTab, setActiveTab] = useState(0);
  const activeService = traviatorServices.tabs[activeTab];

  return (
    <>
      {/* Section 1: Hero Banner */}
      <PageBanner
        title={traviatorServices.hero.title}
        subtitle={traviatorServices.hero.subtitle}
        breadcrumb="Our Services"
      />

      {/* Section 2: Tab Content Area */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column - Tab Menu + Call Card */}
          <div className="w-full lg:w-1/4 flex flex-col gap-8">
            {/* Tab Menu */}
            <div className="flex flex-col gap-2">
              {traviatorServices.tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 text-left text-sm font-medium transition-colors ${
                    activeTab === index
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Call Card - Hidden on mobile, shown after content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative hidden lg:flex h-80 flex-col items-center justify-between overflow-hidden p-6"
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
                <div className="mb-4 flex h-20 w-20 items-center justify-center bg-white/25 rounded-full">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary transition-colors hover:bg-white group">
                    <Phone className="h-5 w-5 text-white group-hover:text-primary transition-colors" />
                  </div>
                </div>
                {/* Description Text */}
                <p className="text-lg font-semibold text-background">
                  {traviatorServices.callCard.topText}
                </p>
                <p className="text-xl max-w-md font-bold text-secondary">
                  {traviatorServices.callCard.mainText}
                </p>
              </div>

              {/* Bottom Content - Call Info */}
              <div className="relative z-10 mt-auto pt-4 text-center">
                <p className="text-xs font-medium uppercase text-background/70">
                  {traviatorServices.callCard.bottomLabel}
                </p>
                <p className="mt-1 text-lg font-bold text-secondary">
                  {content.brand.banner.phone}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Dynamic Content */}
          <div className="w-full lg:w-3/4">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Service Image */}
              <div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden">
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title & Description */}
              <div>
                <h2 className="title">{activeService.title}</h2>
                <div className="mt-4 space-y-4">
                  {activeService.description.map((paragraph, index) => (
                    <p key={index} className="description">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Call Card - Mobile Only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex lg:hidden mt-8 h-72 flex-col items-center justify-between overflow-hidden p-6"
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
                <div className="mb-4 flex h-20 w-20 items-center justify-center bg-white/25 rounded-full">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary transition-colors hover:bg-white group">
                    <Phone className="h-5 w-5 text-white group-hover:text-primary transition-colors" />
                  </div>
                </div>
                {/* Description Text */}
                <p className="text-lg font-semibold text-background">
                  {traviatorServices.callCard.topText}
                </p>
                <p className="text-xl max-w-md font-bold text-secondary">
                  {traviatorServices.callCard.mainText}
                </p>
              </div>

              {/* Bottom Content - Call Info */}
              <div className="relative z-10 mt-auto pt-4 text-center">
                <p className="text-xs font-medium uppercase text-background/70">
                  {traviatorServices.callCard.bottomLabel}
                </p>
                <p className="mt-1 text-lg font-bold text-secondary">
                  {content.brand.banner.phone}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Accent Box (Full Width) */}
      <section className="bg-secondary border-l-4 border-accent mx-auto container w-full">
        <div className="p-4 md:p-8">
          <motion.div
            key={`accent-${activeTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-white text-sm leading-relaxed">
              {activeService.accentBox}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Benefits Section */}
      <section className="mx-auto w-full container px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="title">{traviatorServices.benefits.title}</h2>
            <p className="description mt-6">
              {traviatorServices.benefits.description}
            </p>

            {/* Benefits List */}
            <ul className="mt-8 space-y-3">
              {traviatorServices.benefits.items.map((benefit, index) => (
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

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute bottom-4 -left-4 h-5/6 w-full bg-accent" />
            <div className="relative overflow-hidden">
              <Image
                src={traviatorServices.benefits.image}
                alt="Why Choose Traviator Jets"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
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
                {traviatorServices.cta.title}
              </h2>
              <p className="mt-2 text-background/80 text-center md:text-left">
                {traviatorServices.cta.description}
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-secondary text-white hover:bg-secondary/90"
            >
              <Link href={traviatorServices.cta.buttonHref}>
                {traviatorServices.cta.buttonText}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
