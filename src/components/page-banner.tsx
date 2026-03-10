"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PageBannerProps {
  title: string;
  breadcrumb: string;
  breadcrumbBgColor?: string;
  image?: string;
}

export function PageBanner({
  title,
  breadcrumb,
  breadcrumbBgColor = "bg-background",
  image,
}: PageBannerProps) {
  return (
    <div className="relative -mt-16 md:-mt-20 overflow-hidden">
      <section className="relative h-150 w-full overflow-hidden">
        {/* Background image */}
        <Image
          src={image || "/pagebg.jpg"}
          alt="Page background"
          fill
          priority
          className="object-cover"
        />

        {/* Primary color overlay - translucent */}
        <div className="absolute inset-0 bg-secondary/65" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          {/* Page Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="title-banner"
          >
            {title}
          </motion.h1>
        </div>

        {/* Breadcrumb box - white with rounded top corners, stuck to bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`absolute -bottom-2 md:-bottom-6 left-1/2 -translate-x-1/2 z-20 rounded-t-2xl md:rounded-t-3xl min-w-80 ${breadcrumbBgColor} p-2 md:p-6`}
        >
          <p className="text-sm  uppercase text-primary text-center">
            <span className="text-muted-foreground">Traviator Jets</span>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{breadcrumb}</span>
          </p>
        </motion.div>
      </section>
    </div>
  );
}
