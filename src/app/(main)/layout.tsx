import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TopBanner } from "@/components/top-banner";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopBanner />
      <SiteHeader />
      {children}
      <SiteFooter />
      <ScrollToTop />
    </>
  );
}
