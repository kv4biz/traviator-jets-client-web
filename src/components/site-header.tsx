"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { content } from "@/content";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-background border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        {/* Logo (left) */}
        <Link href="/" className="flex items-center">
          {/* Full logo on lg+ */}
          <Image
            src={content.brand.fullLogo.src}
            alt={content.brand.fullLogo.alt}
            width={content.brand.fullLogo.width}
            height={content.brand.fullLogo.height}
            priority
            className="hidden lg:block"
          />
          {/* Mark on smaller screens */}
          <Image
            src={content.brand.logo.src}
            alt={content.brand.logo.alt}
            width={content.brand.logo.width}
            height={content.brand.logo.height}
            priority
            className="block lg:hidden"
          />
          <span className="sr-only">{content.brand.name}</span>
        </Link>

        {/* Desktop nav (center) */}
        <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex">
          {content.nav.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side: Login + mobile menu */}
        <div className="flex items-center gap-2">
          <Button asChild size="sm">
            <Link href={content.nav.cta.href}>{content.nav.cta.label}</Link>
          </Button>

          {/* Mobile menu trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>{content.brand.name}</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-4">
                {content.nav.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-base text-foreground hover:text-muted-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
