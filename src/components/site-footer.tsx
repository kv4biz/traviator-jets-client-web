import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Linkedin, MapPin, Mail } from "lucide-react";

import { content } from "@/content";
import { Globe } from "@/components/ui/globe";

const socialIcons = {
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin,
  facebook: Linkedin,
} as const;

export function SiteFooter() {
  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Column 1: Logo + Tagline */}
          <div className="md:col-span-1">
            <Image
              src={content.brand.fullLogo.src}
              alt={content.brand.fullLogo.alt}
              width={content.brand.fullLogo.width}
              height={content.brand.fullLogo.height}
              className="brightness-0 invert"
            />
            <p className="mt-4 text-sm text-primary-foreground/80">
              Private jet, save your time and give you comfort.
            </p>
          </div>

          {/* Column 2: Company + Legal */}
          <div className="md:col-span-1">
            <div className="text-sm font-semibold uppercase tracking-wider">
              Company
            </div>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="mt-6 text-sm font-semibold uppercase tracking-wider">
              Legal
            </div>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="md:col-span-1">
            <div className="text-sm font-semibold uppercase tracking-wider">
              Services
            </div>
            <ul className="mt-4 space-y-3">
              {content.home.services.items.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="md:col-span-1">
            <div className="text-sm font-semibold uppercase tracking-wider">
              Contact
            </div>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                {content.brand.banner.location}
              </li>
              <li>
                <Link
                  href={`mailto:${content.brand.banner.email}`}
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  <Mail className="h-4 w-4" />
                  {content.brand.banner.email}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Globe effect - subtle at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-20 pointer-events-none">
        <Globe className="h-100 w-100" />
      </div>

      {/* Copyright bar */}
      <div className="relative z-10 border-t border-primary-foreground/20">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6">
          <p className="text-sm text-primary-foreground/60">
            {content.footer.note}
          </p>
          <div className="flex items-center gap-4">
            {content.brand.banner.socials.map((social) => {
              const Icon = socialIcons[social.platform];
              return (
                <Link
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{social.platform}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
