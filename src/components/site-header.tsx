"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, CircleUser, ChevronDown } from "lucide-react";
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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

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
        <nav className="hidden flex-1 items-center justify-center gap-16 lg:flex">
          {content.nav.items.map((item) => {
            const isActive = pathname === item.href;
            if (item.label === "Services") {
              return (
                <NavigationMenu key={item.href}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={`uppercase text-sm bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent ${
                          isActive
                            ? "text-accent"
                            : "text-white hover:text-accent"
                        }`}
                      >
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-48 gap-1 p-2">
                          {content.home.services.items.map((service) => (
                            <li key={service.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={service.href}
                                  className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                                >
                                  {service.title}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              );
            }
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

        {/* Right side: Avatar + Request a Quote (desktop only) + mobile menu */}
        <div className="flex items-center gap-3">
          {/* Desktop only: Avatar dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="hidden lg:block text-white hover:text-accent transition-colors">
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
          {/* Desktop only: Request a Quote */}
          <Button asChild variant="secondary" className="hidden lg:inline-flex">
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
            <SheetContent side="right" className="flex flex-col">
              <SheetHeader>
                <SheetTitle>{content.brand.name}</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-2 flex-1">
                {content.nav.items.map((item) => {
                  if (item.label === "Services") {
                    return (
                      <Collapsible key={item.href}>
                        <CollapsibleTrigger className="flex w-full items-center justify-between py-3 px-2 text-base font-medium text-foreground hover:bg-muted rounded-md">
                          {item.label}
                          <ChevronDown className="h-4 w-4" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="pl-4">
                          {content.home.services.items.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="block py-2 px-2 text-sm text-muted-foreground hover:text-foreground"
                            >
                              {service.title}
                            </Link>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    );
                  }
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="py-3 px-2 text-base font-medium text-foreground hover:bg-muted rounded-md"
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              {/* Bottom: Auth + CTA buttons */}
              <div className="mt-auto flex flex-col gap-3 pt-6 border-t">
                <Button asChild variant="outline">
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/signup">Sign Up</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/contact">Request a Quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
