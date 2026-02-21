"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, CircleUser } from "lucide-react";
import { usePathname } from "next/navigation";

import { content } from "@/content";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-primary border-b border-primary/20" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 md:h-18 w-full lg:max-w-10/12 items-center justify-between px-4">
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
        <nav className="hidden flex-1 items-center justify-center gap-20 lg:flex">
          {content.nav.items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`uppercase text-sm transition-colors ${
                  isActive ? "text-accent" : "text-white hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side: Request a Quote + Avatar dropdown + mobile menu */}
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-white hover:text-accent transition-colors">
                <CircleUser className="h-6 w-6 md:w-8 md:h-8" />
                <span className="sr-only">Account</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/login">Login</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/signup">Sign Up</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button asChild variant="secondary" className="hidden sm:inline-flex">
            <Link href="/contact">Request a Quote</Link>
          </Button>
          {/* Mobile menu trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" className="lg:hidden">
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
