"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { content } from "@/content";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fadeInUp, staggerChildren } from "@/motion/presets";

export function HomeLanding() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren(0.08)}
        className="grid gap-10"
      >
        <motion.section variants={fadeInUp} className="space-y-4">
          <p className="text-sm font-medium text-muted-foreground">
            {content.home.hero.eyebrow}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            {content.home.hero.title}
          </h1>
          <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
            {content.home.hero.subtitle}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href={content.home.hero.primaryCta.href}>
                {content.home.hero.primaryCta.label}
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href={content.home.hero.secondaryCta.href}>
                {content.home.hero.secondaryCta.label}
              </Link>
            </Button>
          </div>
        </motion.section>

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
  );
}
