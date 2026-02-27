"use client";

import { useState } from "react";
import Image from "next/image";
import { format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MapPin,
  ArrowLeftRight,
  CalendarIcon,
  Users,
  Plus,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { content } from "@/content";

type TripType = "oneWay" | "roundTrip" | "multiLeg";

interface Flight {
  id: string;
  from: string;
  to: string;
  departureDate: Date | undefined;
  returnDate: Date | undefined;
  passengers: number;
}

const createFlight = (): Flight => ({
  id: crypto.randomUUID(),
  from: "",
  to: "",
  departureDate: undefined,
  returnDate: undefined,
  passengers: 1,
});

export function CharterFormSection() {
  const { charterRequest } = content.home;
  const [tripType, setTripType] = useState<TripType>("oneWay");
  const [flights, setFlights] = useState<Flight[]>([createFlight()]);
  const [currentFlightIndex, setCurrentFlightIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right",
  );

  const updateFlight = (id: string, updates: Partial<Flight>) => {
    setFlights((prev) =>
      prev.map((f) => (f.id === id ? { ...f, ...updates } : f)),
    );
  };

  const swapLocations = (id: string) => {
    setFlights((prev) =>
      prev.map((f) => (f.id === id ? { ...f, from: f.to, to: f.from } : f)),
    );
  };

  const addFlight = () => {
    setFlights((prev) => [...prev, createFlight()]);
    setSlideDirection("right");
    setCurrentFlightIndex(flights.length);
  };

  const removeFlight = (id: string) => {
    if (flights.length > 1) {
      setFlights((prev) => prev.filter((f) => f.id !== id));
      if (currentFlightIndex >= flights.length - 1) {
        setCurrentFlightIndex(Math.max(0, flights.length - 2));
      }
    }
  };

  const goToPrevFlight = () => {
    if (currentFlightIndex > 0) {
      setSlideDirection("left");
      setCurrentFlightIndex(currentFlightIndex - 1);
    }
  };

  const goToNextFlight = () => {
    if (currentFlightIndex < flights.length - 1) {
      setSlideDirection("right");
      setCurrentFlightIndex(currentFlightIndex + 1);
    }
  };

  const handleSubmit = () => {
    console.log("Submitting charter request:", { tripType, flights });
  };

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Call Card Column (1/3 width) */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
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
                  Book Instantly
                </p>
                <p className=" text-3xl max-w-md font-bold text-secondary">
                  Private Jets Chartering Services
                </p>
              </div>

              {/* Bottom Content - Call Info */}
              <div className="relative z-10 mt-auto pt-6 text-center">
                <p className="text-sm font-medium uppercase text-background/70">
                  Call any time
                </p>
                <p className="mt-1 text-xl font-bold text-secondary">
                  {content.brand.banner.phone}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Form Column (2/3 width) */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="subtitle">{charterRequest.subtitle}</span>
              <h2 className="title mt-2">{charterRequest.title}</h2>
              <p className="description mt-4">{charterRequest.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            >
              {/* Charter Form - Clean with transparent inputs */}
              <div className="space-y-6">
                {/* Trip Type Selection */}
                <RadioGroup
                  value={tripType}
                  onValueChange={(value) => setTripType(value as TripType)}
                  className="flex flex-wrap gap-4"
                >
                  {[
                    {
                      label: charterRequest.tripTypes.oneWay,
                      value: "oneWay",
                    },
                    {
                      label: charterRequest.tripTypes.roundTrip,
                      value: "roundTrip",
                    },
                    {
                      label: charterRequest.tripTypes.multiLeg,
                      value: "multiLeg",
                    },
                  ].map((t) => (
                    <div key={t.value} className="flex items-center gap-2">
                      <RadioGroupItem
                        value={t.value}
                        id={`charter-${t.value}`}
                        className="border-primary/50 text-accent data-[state=checked]:border-accent data-[state=checked]:bg-accent"
                      />
                      <Label
                        htmlFor={`charter-${t.value}`}
                        className="cursor-pointer text-sm"
                      >
                        {t.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                {/* Flight Rows */}
                <div className="space-y-4">
                  {/* Multi-leg Carousel Navigation */}
                  {tripType === "multiLeg" && flights.length > 0 && (
                    <div className="flex items-center justify-between rounded-md border border-primary/20 bg-primary/5 px-3 py-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={goToPrevFlight}
                        disabled={currentFlightIndex === 0}
                        className="h-8 w-8 hover:bg-primary/10 disabled:opacity-30"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      <span className="text-sm font-medium">
                        Flight {currentFlightIndex + 1} of {flights.length}
                      </span>
                      <div className="flex items-center gap-2">
                        {flights.length > 1 && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              removeFlight(flights[currentFlightIndex].id)
                            }
                            className="h-8 w-8 text-red-500 hover:text-red-400 hover:bg-red-500/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={goToNextFlight}
                          disabled={currentFlightIndex === flights.length - 1}
                          className="h-8 w-8 hover:bg-primary/10 disabled:opacity-30"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Flight Form */}
                  <div className="relative overflow-hidden">
                    <AnimatePresence mode="wait" initial={false}>
                      {(tripType === "multiLeg"
                        ? [flights[currentFlightIndex]]
                        : [flights[0]]
                      ).map((flight) => (
                        <motion.div
                          key={flight.id}
                          initial={{
                            x: slideDirection === "right" ? 100 : -100,
                            opacity: 0,
                          }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{
                            x: slideDirection === "right" ? -100 : 100,
                            opacity: 0,
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="space-y-3"
                        >
                          {/* From + Swap + To */}
                          <div className="flex gap-2">
                            {/* From */}
                            <div className="relative flex-1">
                              <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                              <Input
                                placeholder={charterRequest.form.from}
                                value={flight.from}
                                onChange={(e) =>
                                  updateFlight(flight.id, {
                                    from: e.target.value,
                                  })
                                }
                                className="bg-transparent border-primary pl-9 placeholder:text-muted-foreground focus-visible:border-accent focus-visible:ring-accent/30"
                              />
                            </div>

                            {/* Swap Button */}
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => swapLocations(flight.id)}
                              className="shrink-0 border border-primary bg-transparent hover:bg-primary/10"
                            >
                              <ArrowLeftRight className="h-4 w-4" />
                            </Button>

                            {/* To */}
                            <div className="relative flex-1">
                              <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                              <Input
                                placeholder={charterRequest.form.to}
                                value={flight.to}
                                onChange={(e) =>
                                  updateFlight(flight.id, {
                                    to: e.target.value,
                                  })
                                }
                                className="bg-transparent border-primary pl-9 placeholder:text-muted-foreground focus-visible:border-accent focus-visible:ring-accent/30"
                              />
                            </div>
                          </div>

                          {/* Dates */}
                          <div
                            className={cn(
                              "flex gap-2",
                              tripType === "roundTrip"
                                ? "flex-col sm:flex-row"
                                : "",
                            )}
                          >
                            {/* Departure Date */}
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "flex-1 justify-start bg-transparent border-primary text-left font-normal hover:bg-primary/10",
                                    !flight.departureDate &&
                                      "text-muted-foreground",
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {flight.departureDate ? (
                                    <span>
                                      {format(flight.departureDate, "PPP")}
                                    </span>
                                  ) : (
                                    <span>{charterRequest.form.departure}</span>
                                  )}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-auto p-0"
                                align="start"
                              >
                                <Calendar
                                  mode="single"
                                  selected={flight.departureDate}
                                  onSelect={(date) =>
                                    updateFlight(flight.id, {
                                      departureDate: date,
                                    })
                                  }
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>

                            {/* Return Date (only for round trip) */}
                            {tripType === "roundTrip" && (
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className={cn(
                                      "flex-1 justify-start bg-transparent border-primary text-left font-normal hover:bg-primary/10",
                                      !flight.returnDate &&
                                        "text-muted-foreground",
                                    )}
                                  >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {flight.returnDate ? (
                                      <span>
                                        {format(flight.returnDate, "PPP")}
                                      </span>
                                    ) : (
                                      <span>{charterRequest.form.return}</span>
                                    )}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="w-auto p-0"
                                  align="start"
                                >
                                  <Calendar
                                    mode="single"
                                    selected={flight.returnDate}
                                    onSelect={(date) =>
                                      updateFlight(flight.id, {
                                        returnDate: date,
                                      })
                                    }
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                            )}
                          </div>

                          {/* Passengers */}
                          <div className="flex items-center justify-between rounded-md border border-primary bg-transparent px-3 py-2">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Users className="h-4 w-4" />
                              <span className="text-sm">
                                {charterRequest.form.passengers}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() =>
                                  updateFlight(flight.id, {
                                    passengers: Math.max(
                                      1,
                                      flight.passengers - 1,
                                    ),
                                  })
                                }
                                className="h-7 w-7 border border-primary hover:bg-primary/10"
                              >
                                −
                              </Button>
                              <span className="w-6 text-center">
                                {flight.passengers}
                              </span>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() =>
                                  updateFlight(flight.id, {
                                    passengers: flight.passengers + 1,
                                  })
                                }
                                className="h-7 w-7 border border-primary hover:bg-primary/10"
                              >
                                +
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Add Flight Button (multi-leg only) */}
                  {tripType === "multiLeg" && (
                    <Button
                      variant="outline"
                      onClick={addFlight}
                      className="w-full border-accent/50 bg-transparent text-accent hover:bg-accent/10"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      {charterRequest.form.addFlight}
                    </Button>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  onClick={handleSubmit}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  size="lg"
                >
                  {charterRequest.form.submit}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
