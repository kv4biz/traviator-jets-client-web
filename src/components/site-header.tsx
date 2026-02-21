import Link from "next/link";
import Image from "next/image";

import { content } from "@/content";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-3 font-semibold tracking-tight"
        >
          <Image
            src={content.brand.logo.src}
            alt={content.brand.logo.alt}
            width={content.brand.logo.width}
            height={content.brand.logo.height}
            priority
          />
          <span className="sr-only">{content.brand.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
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

        <Button asChild>
          <Link href={content.nav.cta.href}>{content.nav.cta.label}</Link>
        </Button>
      </div>
    </header>
  );
}
