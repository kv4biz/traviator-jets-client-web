"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Twitter, Facebook, Instagram } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { content } from "@/content";
import { useCountUp } from "@/hooks/use-count-up";

const PinterestIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

function StatCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { count, ref } = useCountUp({ end: value, duration: 2000 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center flex flex-col items-center"
    >
      <div className="text-2xl font-bold text-white md:text-3xl">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-white/80">{label}</div>
    </motion.div>
  );
}

export default function AboutPage() {
  const { intro, stats, videoCta, team, ctaBanner } = content.about;

  return (
    <>
      {/* Section 1: Page Banner */}
      <PageBanner title="About Us" breadcrumb="About" />

      {/* Section 2: About Intro */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="subtitle">{intro.subtitle}</span>
            <h2 className="title mt-2">{intro.title}</h2>
            <p className="lead mt-6">{intro.paragraphs[0]}</p>
            <p className="description mt-4">{intro.paragraphs[1]}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute bottom-4 -right-4 h-5/6 w-full  bg-accent" />
            <div className="relative overflow-hidden ">
              <Image
                src={intro.image}
                alt="About Traviator Jets"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Stats Counter */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-16 md:py-24"
        style={{ backgroundImage: "url('/seven-wonders.webp')" }}
      >
        <div className="absolute inset-0 bg-secondary/85" />
        <div className="relative mx-auto w-full max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <StatCounter
                key={index}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Section 5: Logo Marquee */}
      <section className="overflow-hidden bg-muted/30 py-12">
        <div className="logo-marquee">
          <div className="logo-marquee-track">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-16">
                {[
                  "Traviator Jets",
                  "Traviator Jets ",
                  "Traviator Jets",
                  "Traviator Jets",
                  "PEXJET",
                  " PEXJET",
                  "PEXJET",
                  "PEXJET",
                ].map((brand, index) => (
                  <div
                    key={`${setIndex}-${index}`}
                    className="logo-item flex h-12 min-w-40 items-center justify-center text-lg font-semibold text-muted-foreground/50 transition-all duration-300 hover:text-foreground"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section 4: Video CTA */}
      <section
        className="relative h-140 bg-cover bg-center bg-no-repeat md:h-165"
        style={{ backgroundImage: `url('${videoCta.backgroundImage}')` }}
      >
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to left, var(--secondary), var(--primary))",
            opacity: 0.65,
          }}
        />

        {/* Content in front */}
        <div className="relative flex h-full flex-col items-center justify-center px-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="title mb-8 text-center max-w-2xl mx-auto text-white"
          >
            {videoCta.title}
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href={videoCta.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="play-button-shimmer flex h-20 w-20 items-center justify-center bg-white text-primary transition-transform hover:scale-110"
            >
              <Play className="h-10 w-10 fill-current" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Meet Our Team */}
      <section className="mx-auto w-full lg:container px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="subtitle">{team.subtitle}</span>
          <h2 className="title mt-2">{team.title}</h2>
        </motion.div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {team.members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="team-card rounded-none group relative overflow-hidden  w-80 lg:w-100">
                <div className="flex flex-col">
                  {/* Right image */}
                  <div className="relative h-64 w-64 lg:h-96 lg:w-96">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  {/* Left content */}
                  <div className="relative z-10 flex flex-1 flex-col justify-end p-6">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground uppercase">
                      {member.role}
                    </p>

                    {/* Social icons */}
                    <div className="mt-4 flex gap-2 ">
                      {member.socials.map((social) => {
                        const Icon =
                          social.platform === "twitter"
                            ? Twitter
                            : social.platform === "facebook"
                              ? Facebook
                              : social.platform === "instagram"
                                ? Instagram
                                : PinterestIcon;

                        return (
                          <Link
                            key={social.platform}
                            href={social.href}
                            className="social-icon flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-muted-foreground transition-all duration-300 hover:bg-secondary hover:text-white"
                          >
                            <Icon className="h-4 w-4" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 7: CTA Banner */}
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
            <h2 className="title-cta text-background text-center md:text-left">
              {ctaBanner.title}
            </h2>
            <Button
              asChild
              size="lg"
              className="bg-secondary text-white hover:bg-secondary/90"
            >
              <Link href={ctaBanner.buttonHref}>{ctaBanner.buttonText}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
