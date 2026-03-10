import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { TooltipProvider } from "@/components/ui/tooltip";
import { LoadingProvider } from "@/components/loading-provider";
import { content } from "@/content";

const fontSans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Montserrat({
  subsets: ["latin"],
  variable: "--font-serif",
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
        className={`${fontSans.variable} ${fontSerif.variable} antialiased`}
      >
        <LoadingProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
