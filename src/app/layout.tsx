import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { content } from "@/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
