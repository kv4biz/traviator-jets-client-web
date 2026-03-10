"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plane, Users, Calendar, Clock } from "lucide-react";

import { content } from "@/content";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardHeader } from "./ui/card";
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

export function SpecialOfferSection() {
  const { specialOffer } = content.home;
  const { promo, emptyLegs } = specialOffer;
  const [showSignInDialog, setShowSignInDialog] = useState(false);

  return (
    <section className="w-full">
      {/* ROW 1: Special Offer Promo */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Column 1: Promo Content */}
        <div className="relative w-full lg:w-1/2 min-h-80 lg:min-h-175 overflow-hidden">
          {/* Location Strap - Top Left, Animated */}
          <motion.div
            className="absolute top-10 left-0 z-0"
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={promo.images.locationStrap}
              alt="Location strap"
              width={120}
              height={60}
              className="object-contain"
            />
          </motion.div>

          {/* Seven Wonders - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 z-0">
            <Image
              src={promo.images.sevenWonders}
              alt="Seven wonders"
              width={600}
              height={200}
              className="object-contain w-full"
            />
          </div>

          {/* Accent Overlay */}
          <div className="absolute inset-0 bg-primary/90 z-10" />

          {/* Content */}
          <div className="relative z-20 flex h-full w-full items-center justify-center lg:items-center lg:justify-end lg:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start justify-center h-full p-8 lg:p-12 lg:pb-16 text-left"
            >
              <p className="subtitle text-secondary">{promo.subtitle}</p>
              <h2 className="text-4xl lg:text-7xl mt-2 text-white max-w-2xl">
                {promo.title}
              </h2>
              <p className="mt-4 text-sm lg:text-lg text-white/80 max-w-2xl">
                {promo.description}
              </p>
              <Button className="mt-6 max-w-lg" variant={"secondary"} size="lg">
                {promo.buttonText}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Column 2: Special Offer Image */}
        <div className="relative w-full lg:w-1/2 min-h-125 lg:min-h-175 hidden lg:block">
          <Image
            src={promo.images.specialOffer}
            alt="Special offer"
            fill
            className="object-cover"
          />

          {/* Badge - Aligned with button level */}
          <div className="absolute bottom-8 left-8 bg-accent text-secondary font-bold px-4 py-2 text-sm uppercase tracking-wider">
            {promo.badge}
          </div>
        </div>
      </div>

      {/* ROW 2: Empty Legs Browse */}
      <div className="relative py-16 lg:py-24 bg-background">
        {/* Gray World Map Background - 1/3 width on desktop, full width translucent on mobile */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <Image
            src="/gray-world-map.png"
            alt="World map"
            fill
            className="object-cover object-top-left"
          />
        </div>

        <div className="relative z-10 container mx-auto px-8 lg:px-4">
          {/* 3 Column Grid */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            {/* Col 1: Info */}
            <div className="flex flex-col w-full lg:max-w-1/3 justify-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="subtitle">{emptyLegs.subtitle}</span>
                <h2 className="title mt-2">{emptyLegs.title}</h2>
                <p className="description my-4 w-full lg:max-w-lg">
                  {emptyLegs.description}
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
                  {emptyLegs.items.map((leg, index) => (
                    <CarouselItem
                      key={`${leg.departure}-${leg.arrival}-${index}`}
                      className="pl-4 basis-full md:basis-1/2  group"
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
      </div>

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
    </section>
  );
}
