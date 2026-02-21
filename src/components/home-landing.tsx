"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { content } from "@/content";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HeroBanner } from "@/components/hero-banner";
import { fadeInUp, staggerChildren } from "@/motion/presets";

export function HomeLanding() {
  return (
    <>
      {/* Hero banner with bouncing jet that overflows */}
      <HeroBanner />

      {/* Main content - add padding-top to accommodate jet overflow */}
      <main className="relative z-0 mx-auto  w-full max-w-6xl px-4 pb-12 pt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren(0.08)}
          className="grid gap-10"
        >
          <motion.section variants={fadeInUp} className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                {content.home.services.title}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {content.home.services.subtitle}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {content.home.services.items.map((s) => (
                <Link key={s.href} href={s.href} className="block">
                  <Card className="h-full transition-colors hover:bg-accent">
                    <CardHeader>
                      <CardTitle>{s.title}</CardTitle>
                      <CardDescription>{s.description}</CardDescription>
                    </CardHeader>
                    <CardContent />
                  </Card>
                </Link>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </main>
    </>
  );
}
