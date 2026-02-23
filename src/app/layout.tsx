import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TopBanner } from "@/components/top-banner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LoadingProvider } from "@/components/loading-provider";
import { content } from "@/content";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(content.seo.siteUrl),
  title: {
    default: content.metadata.title,
    template: content.seo.titleTemplate,
  },
  description: content.metadata.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: content.seo.openGraph.type,
    locale: content.seo.openGraph.locale,
    url: "/",
    siteName: content.brand.name,
    title: content.metadata.title,
    description: content.metadata.description,
  },
  twitter: {
    card: "summary_large_image",
    title: content.metadata.title,
    description: content.metadata.description,
  },
  icons: {
    icon: content.seo.icons.icon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiased`}
      >
        <LoadingProvider>
          <TooltipProvider>
            <TopBanner />
            <SiteHeader />
            {children}
            <SiteFooter />
          </TooltipProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
