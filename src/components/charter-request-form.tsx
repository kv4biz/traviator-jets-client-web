"use client";

import { useState } from "react";
import { format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  ArrowLeftRight,
  CalendarIcon,
  Users,
  Plus,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { content } from "@/content";
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

export function CharterRequestForm() {
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
    <div className="space-y-6">
      {/* Trip Type Selection */}
      <RadioGroup
        value={tripType}
        onValueChange={(value) => setTripType(value as TripType)}
        className="flex flex-wrap gap-4"
      >
        {[
          { label: charterRequest.tripTypes.oneWay, value: "oneWay" },
          { label: charterRequest.tripTypes.roundTrip, value: "roundTrip" },
          { label: charterRequest.tripTypes.multiLeg, value: "multiLeg" },
        ].map((t) => (
          <div key={t.value} className="flex items-center gap-2">
            <RadioGroupItem
              value={t.value}
              id={t.value}
              className="border-white/50 text-accent data-[state=checked]:border-accent data-[state=checked]:bg-accent"
            />
            <Label
              htmlFor={t.value}
              className="cursor-pointer text-sm text-white/90"
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
          <div className="flex items-center justify-between rounded-md border border-white/20 bg-white/5 px-3 py-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevFlight}
              disabled={currentFlightIndex === 0}
              className="h-8 w-8 text-white hover:bg-white/10 disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <span className="text-sm font-medium text-white">
              Flight {currentFlightIndex + 1} of {flights.length}
            </span>
            <div className="flex items-center gap-2">
              {flights.length > 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFlight(flights[currentFlightIndex].id)}
                  className="h-8 w-8 text-red-400 hover:text-red-300 hover:bg-red-500/10"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={goToNextFlight}
                disabled={currentFlightIndex === flights.length - 1}
                className="h-8 w-8 text-white hover:bg-white/10 disabled:opacity-30"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}

        {/* Flight Form - Single flight or carousel item */}
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
                    <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
                    <Input
                      placeholder={charterRequest.form.from}
                      value={flight.from}
                      onChange={(e) =>
                        updateFlight(flight.id, { from: e.target.value })
                      }
                      className="bg-white/10 border-white/20 pl-9 text-white placeholder:text-white/50 focus-visible:border-accent focus-visible:ring-accent/30"
                    />
                  </div>

                  {/* Swap Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => swapLocations(flight.id)}
                    className="shrink-0 border border-white/20 bg-white/10 text-white hover:bg-white/20"
                  >
                    <ArrowLeftRight className="h-4 w-4" />
                  </Button>

                  {/* To */}
                  <div className="relative flex-1">
                    <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
                    <Input
                      placeholder={charterRequest.form.to}
                      value={flight.to}
                      onChange={(e) =>
                        updateFlight(flight.id, { to: e.target.value })
                      }
                      className="bg-white/10 border-white/20 pl-9 text-white placeholder:text-white/50 focus-visible:border-accent focus-visible:ring-accent/30"
                    />
                  </div>
                </div>

                {/* Dates */}
                <div
                  className={cn(
                    "flex gap-2",
                    tripType === "roundTrip" ? "flex-col sm:flex-row" : "",
                  )}
                >
                  {/* Departure Date */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "flex-1 justify-start bg-white/10 border-white/20 text-left font-normal hover:bg-white/20",
                          !flight.departureDate && "text-white/50",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {flight.departureDate ? (
                          <span className="text-white">
                            {format(flight.departureDate, "PPP")}
                          </span>
                        ) : (
                          <span>{charterRequest.form.departure}</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={flight.departureDate}
                        onSelect={(date) =>
                          updateFlight(flight.id, { departureDate: date })
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
                            "flex-1 justify-start bg-white/10 border-white/20 text-left font-normal hover:bg-white/20",
                            !flight.returnDate && "text-white/50",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {flight.returnDate ? (
                            <span className="text-white">
                              {format(flight.returnDate, "PPP")}
                            </span>
                          ) : (
                            <span>{charterRequest.form.return}</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={flight.returnDate}
                          onSelect={(date) =>
                            updateFlight(flight.id, { returnDate: date })
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                </div>

                {/* Passengers */}
                <div className="flex items-center justify-between rounded-md border border-white/20 bg-white/10 px-3 py-2">
                  <div className="flex items-center gap-2 text-white/70">
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
                          passengers: Math.max(1, flight.passengers - 1),
                        })
                      }
                      className="h-7 w-7 border border-white/20 text-white hover:bg-white/20"
                    >
                      −
                    </Button>
                    <span className="w-6 text-center text-white">
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
                      className="h-7 w-7 border border-white/20 text-white hover:bg-white/20"
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
  );
}
