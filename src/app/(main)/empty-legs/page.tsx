"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoCheckmark } from "react-icons/io5";
import { Phone, Plane, Users, Calendar, Clock } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { content } from "@/content";

export default function EmptyLegsServicePage() {
  const { emptyLegs } = content;
  const { emptyLegs: emptyLegsDeals } = content.home.specialOffer;
  const [showSignInDialog, setShowSignInDialog] = useState(false);

  return (
    <>
      {/* Section 1: Hero Banner */}
      <PageBanner
        title={emptyLegs.hero.title}
        subtitle={emptyLegs.hero.subtitle}
        breadcrumb="Empty Legs"
      />

      {/* Section 2: What Empty Leg Means */}
      <section className="mx-auto w-full container px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute bottom-4 -right-4 h-5/6 w-full bg-accent" />
            <div className="relative overflow-hidden">
              <Image
                src={emptyLegs.whatEmptyLegMeans.image}
                alt="Empty Leg Flights"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="subtitle">
              {emptyLegs.whatEmptyLegMeans.subtitle}
            </span>
            <h2 className="title mt-2">{emptyLegs.whatEmptyLegMeans.title}</h2>
            <div className="mt-6 space-y-4">
              {emptyLegs.whatEmptyLegMeans.description.map(
                (paragraph, index) => (
                  <p key={index} className="description">
                    {paragraph}
                  </p>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Flexible Travel Opportunities */}
      <section className="bg-secondary border-l-4 border-accent mx-auto container w-full">
        <div className="p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="">
              {emptyLegs.flexibleTravel.description.map((paragraph, index) => (
                <p key={index} className="text-white text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Why Traviator Jets */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
        <div className="flex flex-col gap-10 md:flex-row md:items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="subtitle">{emptyLegs.whyTraviator.subtitle}</span>
            <h2 className="title mt-2">{emptyLegs.whyTraviator.title}</h2>
            <p className="description mt-6">
              {emptyLegs.whyTraviator.description}
            </p>

            {/* Benefits List */}
            <ul className="mt-8 space-y-3">
              {emptyLegs.whyTraviator.benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent">
                    <IoCheckmark className="h-3 w-3 text-accent-foreground" />
                  </span>
                  <span className="text-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Call Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex h-full min-h-96 flex-col items-center justify-between overflow-hidden p-8"
          >
            {/* Background Image */}
            <Image
              src="/call-card-img.jpg"
              alt="Call us"
              fill
              className="object-cover"
            />
            {/* Accent Overlay */}
            <div className="absolute inset-0 bg-accent/80" />

            {/* Top Content */}
            <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center">
              {/* Phone Icon */}
              <div className="mb-6 flex h-24 w-24 items-center justify-center bg-white/25 rounded-full">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary transition-colors hover:bg-white group">
                  <Phone className="h-6 w-6 text-white group-hover:text-primary transition-colors" />
                </div>
              </div>
              {/* Description Text */}
              <p className="text-xl font-semibold text-background">
                {emptyLegs.callCard.topText}
              </p>
              <p className="text-3xl max-w-md font-bold text-secondary">
                {emptyLegs.callCard.mainText}
              </p>
            </div>

            {/* Bottom Content - Call Info */}
            <div className="relative z-10 mt-auto pt-6 text-center">
              <p className="text-sm font-medium uppercase text-background/70">
                {emptyLegs.callCard.bottomLabel}
              </p>
              <p className="mt-1 text-xl font-bold text-secondary">
                {content.brand.banner.phone}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Section 6: Featured Empty Leg Opportunities */}
      <section className="relative py-16 lg:py-24 bg-background">
        {/* Gray World Map Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <Image
            src="/gray-world-map.png"
            alt="World map"
            fill
            className="object-cover object-top-left"
          />
        </div>

        <div className="relative z-10 container mx-auto px-8 lg:px-4">
          {/* Header + Carousel Grid */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            {/* Info Column */}
            <div className="flex flex-col w-full lg:max-w-1/3 justify-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="subtitle">
                  {emptyLegs.featuredDeals.subtitle}
                </span>
                <h2 className="title mt-2">{emptyLegs.featuredDeals.title}</h2>
                <p className="description my-4 w-full lg:max-w-lg">
                  {emptyLegs.featuredDeals.description}
                </p>
              </motion.div>
            </div>

            {/* Empty Leg Cards Carousel */}
            <div className="">
              <Carousel
                opts={{
                  align: "start",
                  slidesToScroll: 1,
                }}
                className="w-full"
              >
                <CarouselContent className="">
                  {emptyLegsDeals.items.map((leg, index) => (
                    <CarouselItem
                      key={`${leg.departure}-${leg.arrival}-${index}`}
                      className="pl-4 basis-full md:basis-1/2 group"
                    >
                      <Card className="bg-white shadow-lg border border-border hover:border-primary transition-colors h-full flex flex-col">
                        {/* Departure - Plane - Arrival */}
                        <CardHeader className="flex items-center justify-between bg-gray-200 group-hover:bg-secondary group-hover:text-accent p-4 w-full">
                          <span className="text-xl font-bold transition-colors">
                            {leg.departure}
                          </span>
                          <Plane
                            className="h-5 w-5 rotate-45"
                            fill="currentColor"
                          />
                          <span className="text-xl font-bold transition-colors">
                            {leg.arrival}
                          </span>
                        </CardHeader>

                        {/* Slanted Plane Image */}
                        <div className="flex justify-center my-4 px-4">
                          <div className="relative h-16 w-full">
                            <Image
                              src="/plane.png"
                              alt="Plane"
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>

                        {/* Flight Details */}
                        <div className="space-y-2 text-sm grow px-4">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>Date: {leg.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>Departure: {leg.departureTime}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>Arrival: {leg.arrivalTime}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="h-4 w-4" />
                            <span>Passengers: {leg.passengers}</span>
                          </div>
                        </div>

                        {/* Price and Book Button */}
                        <div className="mt-4 pt-4 border-t border-border px-4 pb-4">
                          <p className="text-sm text-muted-foreground">
                            Starting from
                          </p>
                          <p className="text-2xl font-bold text-primary">
                            {leg.price}
                          </p>
                          <Button
                            size="lg"
                            className="w-full mt-4"
                            onClick={() => setShowSignInDialog(true)}
                          >
                            Book Now
                          </Button>
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex items-center gap-2 mt-6">
                  <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-none border-2" />
                  <CarouselNext className="static translate-y-0 h-12 w-12 rounded-none border-2" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      {/* Section 5: Our Booking Process */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto w-full container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="subtitle">{emptyLegs.process.subtitle}</span>
            <h2 className="title mt-2">{emptyLegs.process.title}</h2>
          </motion.div>

          {/* Process Steps */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {emptyLegs.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="relative h-full p-6 border-none bg-background shadow-md hover:shadow-lg transition-shadow">
                  {/* Step Number */}
                  <div className="absolute -top-1 left-6 flex h-10 w-10 items-center justify-center bg-accent text-accent-foreground font-bold text-lg">
                    {step.number}
                  </div>
                  {/* Content */}
                  <div className="pt-8">
                    <h3 className="text-sm font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: CTA Banner */}
      <section className="relative bg-accent py-16 lg:py-24 overflow-hidden">
        {/* Dot Pattern - Bottom Left */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-48 h-48 lg:w-64 lg:h-64 opacity-30 pointer-events-none"
        >
          <Image
            src="/dot-pattern.png"
            alt="Dot pattern"
            fill
            className="object-cover object-bottom-left"
          />
        </motion.div>

        {/* Animated Jet Stack - Right */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 right-0 w-64 h-48 lg:w-96 lg:h-64 opacity-30 pointer-events-none"
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/stack-jet-location.png"
            alt="Jet stack"
            fill
            className="object-cover object-right"
          />
        </motion.div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-between gap-6 md:flex-row"
          >
            <div>
              <h2 className="title-cta text-background text-center md:text-left">
                {emptyLegs.cta.title}
              </h2>
              <p className="mt-2 text-background/80 text-center md:text-left">
                {emptyLegs.cta.description}
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-secondary text-white hover:bg-secondary/90"
            >
              <Link href={emptyLegs.cta.buttonHref}>
                {emptyLegs.cta.buttonText}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Sign In Dialog */}
      <AlertDialog open={showSignInDialog} onOpenChange={setShowSignInDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Sign In Required</AlertDialogTitle>
            <AlertDialogDescription>
              You need to be signed in to book an empty leg flight. Please sign
              in to continue.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction asChild>
              <Link href="/login">Sign In</Link>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
