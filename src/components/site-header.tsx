"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-secondary " : "bg-transparent"
      }`}
    >
      <div className="mx-auto container flex h-16 lg:h-18 w-full items-center justify-between px-4 py-2">
        {/* Logo (left) - fixed size, no shrinking */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src={content.brand.fullLogo.src}
            alt={content.brand.fullLogo.alt}
            width={160}
            height={40}
            priority
            className="w-[160px] h-[40px]"
          />
          <span className="sr-only">{content.brand.name}</span>
        </Link>

        {/* Desktop nav (right-aligned) */}
        <nav className="hidden items-center justify-end gap-5 lg:gap-10 lg:flex">
          {content.nav.items.map((item) => {
            // Services: highlight if pathname starts with /services
            if (item.label === "Services") {
              const isServicesActive = pathname.startsWith("/services");
              return (
                <NavigationMenu key={item.href}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={`uppercase text-sm rounded-none bg-transparent! hover:bg-transparent! focus:bg-transparent! focus:outline-none focus-visible:ring-0 focus-visible:outline-none data-[state=open]:bg-transparent! data-[state=open]:hover:bg-transparent! data-[state=open]:focus:bg-transparent! transition-colors ${
                          isServicesActive
                            ? "text-primary!"
                            : "text-white! hover:text-primary!"
                        }`}
                      >
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-48 gap-1 p-1">
                          {content.home.services.items.map((service) => (
                            <li key={service.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={service.href}
                                  className="block rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-primary-foreground"
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
            // Our Company: highlight if pathname is /about OR /faq
            if (item.label === "Our Company") {
              const isAboutActive =
                pathname === "/about" || pathname === "/faq";
              return (
                <NavigationMenu key={item.href}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={`uppercase text-sm rounded-none bg-transparent! hover:bg-transparent! focus:bg-transparent! focus:outline-none focus-visible:ring-0 focus-visible:outline-none data-[state=open]:bg-transparent! data-[state=open]:hover:bg-transparent! data-[state=open]:focus:bg-transparent! transition-colors ${
                          isAboutActive
                            ? "text-accent!"
                            : "text-white! hover:text-accent!"
                        }`}
                      >
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-48 gap-1 p-1">
                          {content.about.items.map((aboutItem) => (
                            <li key={aboutItem.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={aboutItem.href}
                                  className="block rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
                                >
                                  {aboutItem.title}
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
            // Regular nav items (Home, Contact)
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`uppercase font-semibold text-sm transition-colors ${
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
              <button className="hidden lg:block text-white hover:text-accent transition-colors focus:outline-none">
                <Avatar size="lg">
                  <AvatarImage src="" alt="User" />
                  <AvatarFallback className="bg-white/20 text-white">
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
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
          {/* Mobile menu trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant={"link"} className="lg:hidden">
                <Menu className="h-12 w-12" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col py-2">
              <SheetHeader>
                <SheetTitle>{content.brand.name}</SheetTitle>
              </SheetHeader>
              <nav className="my-6 flex flex-col gap-2 flex-1">
                {content.nav.mobileItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-3 px-2 text-base font-medium text-foreground hover:bg-muted rounded-md hover:text-accent"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              {/* Bottom: Auth buttons only (no Request a Quote on mobile) */}
              <div className="mt-auto flex flex-col gap-3 pt-6 border-t">
                <Button asChild variant="outline">
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
