"use client";
import { HeroBanner } from "@/components/hero-banner";
import { FeaturesSection } from "@/components/features-section";
import { AboutSection } from "@/components/about-section";
import { CharterRequestSection } from "@/components/charter-request-section";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { SpecialOfferSection } from "@/components/special-offer-section";
import { SubscriptionSection } from "@/components/subscription-section";

export function HomeLanding() {
  return (
    <>
      {/* Hero banner with bouncing jet that overflows */}
      <HeroBanner />

      {/* Features section with gold background */}
      <FeaturesSection />

      {/* About section */}
      <AboutSection />

      {/* Charter Request section */}
      <CharterRequestSection />

      {/* Services section */}
      <ServicesSection />

      {/* Special Offer section */}
      <SpecialOfferSection />

      {/* Testimonials section */}
      <TestimonialsSection />

      {/* Subscription section */}
      <SubscriptionSection />
    </>
  );
}
