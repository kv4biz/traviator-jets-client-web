"use client";

import Link from "next/link";
import { Instagram, Twitter, Linkedin, MapPin, Mail } from "lucide-react";

import { content } from "@/content";

const socialIcons = {
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin,
  facebook: Linkedin, // fallback
} as const;

export function TopBanner() {
  const { banner } = content.brand;

  return (
    <div className="hidden w-full bg-secondary py-4 text-sm text-primary-foreground md:flex items-center">
      <div className="mx-auto container flex items-center justify-between px-4">
        {/* Location + Email */}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            {banner.location}
          </span>
          <span className="text-primary-foreground">|</span>
          <Link
            href={`mailto:${banner.email}`}
            className="flex items-center gap-1.5 hover:text-primary-foreground"
          >
            <Mail className="h-4 w-4" />
            {banner.email}
          </Link>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {banner.socials.map((social) => {
            const Icon = socialIcons[social.platform];
            return (
              <Link
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground"
              >
                <Icon className="h-4 w-4" />
                <span className="sr-only">{social.platform}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
