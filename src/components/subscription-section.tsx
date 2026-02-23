"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plane } from "lucide-react";

import { content } from "@/content";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export function SubscriptionSection() {
  const { subscription } = content.home;

  return (
    <section className="relative bg-accent py-16 lg:py-24 overflow-hidden">
      {/* Dot Pattern - Bottom Left */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-48 h-48 lg:w-64 lg:h-64 opacity-30 pointer-events-none"
      >
        <Image
          src={subscription.images.dotPattern}
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
          src={subscription.images.jetStack}
          alt="Jet stack"
          fill
          className="object-cover object-right"
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Column 1: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-medium uppercase tracking-wider text-white">
              {subscription.subtitle}
            </span>
            <h2 className="heading-xl mt-2">{subscription.title}</h2>
          </motion.div>

          {/* Column 2: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {/* Input with Button */}
            <div className="flex border border-white rounded-full p-3">
              <Input
                type="email"
                placeholder={subscription.placeholder}
                className="h-14 text-base border-0"
              />
              <Button className="h-14 rounded-full px-6 w-40">
                {subscription.buttonText}{" "}
                <Plane className="h-5 w-5 mr-2 rotate-45" />
              </Button>
            </div>

            {/* Checkbox with Privacy Policy */}
            <div className="flex items-center gap-2">
              <Checkbox id="privacy" className="rounded-none" />
              <label
                htmlFor="privacy"
                className="text-sm text-muted-foreground"
              >
                {subscription.privacyText}{" "}
                <Link
                  href="/privacy-policy"
                  className="text-primary underline hover:text-primary/80"
                >
                  {subscription.privacyLink}
                </Link>
                .
              </label>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
