"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plane,
  Calendar as CalendarIcon,
  Users,
  Search,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  SlidersHorizontal,
  ArrowUpDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
import { format } from "date-fns";

interface EmptyLegDeal {
  id: string;
  fromCity: string;
  fromCode: string;
  toCity: string;
  toCode: string;
  aircraft: string;
  date: string;
  passengers: number;
  price: number;
  originalPrice: number;
}

const sampleDeals: EmptyLegDeal[] = [
  {
    id: "1",
    fromCity: "New York",
    fromCode: "JFK",
    toCity: "Miami",
    toCode: "MIA",
    aircraft: "Cessna Citation X",
    date: "Mar 15, 2026",
    passengers: 8,
    price: 2500,
    originalPrice: 8000,
  },
  {
    id: "2",
    fromCity: "Los Angeles",
    fromCode: "LAX",
    toCity: "Las Vegas",
    toCode: "LAS",
    aircraft: "Embraer Phenom 300",
    date: "Mar 18, 2026",
    passengers: 6,
    price: 1800,
    originalPrice: 5500,
  },
  {
    id: "3",
    fromCity: "Chicago",
    fromCode: "ORD",
    toCity: "Dallas",
    toCode: "DFW",
    aircraft: "Bombardier Learjet 75",
    date: "Mar 20, 2026",
    passengers: 7,
    price: 2200,
    originalPrice: 7000,
  },
  {
    id: "4",
    fromCity: "Boston",
    fromCode: "BOS",
    toCity: "Washington",
    toCode: "DCA",
    aircraft: "Cessna Citation CJ3",
    date: "Mar 22, 2026",
    passengers: 6,
    price: 1500,
    originalPrice: 4500,
  },
  {
    id: "5",
    fromCity: "San Francisco",
    fromCode: "SFO",
    toCity: "Seattle",
    toCode: "SEA",
    aircraft: "Gulfstream G280",
    date: "Mar 25, 2026",
    passengers: 10,
    price: 3200,
    originalPrice: 9500,
  },
  {
    id: "6",
    fromCity: "Denver",
    fromCode: "DEN",
    toCity: "Phoenix",
    toCode: "PHX",
    aircraft: "Hawker 800XP",
    date: "Mar 28, 2026",
    passengers: 8,
    price: 1900,
    originalPrice: 6000,
  },
  {
    id: "7",
    fromCity: "Miami",
    fromCode: "MIA",
    toCity: "New York",
    toCode: "JFK",
    aircraft: "Gulfstream G550",
    date: "Mar 30, 2026",
    passengers: 12,
    price: 4500,
    originalPrice: 12000,
  },
  {
    id: "8",
    fromCity: "Dallas",
    fromCode: "DFW",
    toCity: "Los Angeles",
    toCode: "LAX",
    aircraft: "Bombardier Challenger 350",
    date: "Apr 1, 2026",
    passengers: 9,
    price: 3800,
    originalPrice: 10500,
  },
  {
    id: "9",
    fromCity: "Seattle",
    fromCode: "SEA",
    toCity: "Denver",
    toCode: "DEN",
    aircraft: "Cessna Citation Latitude",
    date: "Apr 3, 2026",
    passengers: 8,
    price: 2100,
    originalPrice: 6500,
  },
  {
    id: "10",
    fromCity: "Las Vegas",
    fromCode: "LAS",
    toCity: "San Francisco",
    toCode: "SFO",
    aircraft: "Embraer Legacy 500",
    date: "Apr 5, 2026",
    passengers: 10,
    price: 2800,
    originalPrice: 8500,
  },
  {
    id: "11",
    fromCity: "Washington",
    fromCode: "DCA",
    toCity: "Chicago",
    toCode: "ORD",
    aircraft: "Hawker 900XP",
    date: "Apr 7, 2026",
    passengers: 8,
    price: 2400,
    originalPrice: 7500,
  },
  {
    id: "12",
    fromCity: "Phoenix",
    fromCode: "PHX",
    toCity: "Boston",
    toCode: "BOS",
    aircraft: "Gulfstream G450",
    date: "Apr 10, 2026",
    passengers: 14,
    price: 5200,
    originalPrice: 14000,
  },
  {
    id: "13",
    fromCity: "New York",
    fromCode: "JFK",
    toCity: "Los Angeles",
    toCode: "LAX",
    aircraft: "Bombardier Global 6000",
    date: "Apr 12, 2026",
    passengers: 13,
    price: 8500,
    originalPrice: 22000,
  },
  {
    id: "14",
    fromCity: "Chicago",
    fromCode: "ORD",
    toCity: "Miami",
    toCode: "MIA",
    aircraft: "Cessna Citation Sovereign",
    date: "Apr 14, 2026",
    passengers: 9,
    price: 3100,
    originalPrice: 9000,
  },
  {
    id: "15",
    fromCity: "Denver",
    fromCode: "DEN",
    toCity: "Las Vegas",
    toCode: "LAS",
    aircraft: "Embraer Phenom 100",
    date: "Apr 16, 2026",
    passengers: 4,
    price: 1200,
    originalPrice: 3500,
  },
  {
    id: "16",
    fromCity: "Boston",
    fromCode: "BOS",
    toCity: "Dallas",
    toCode: "DFW",
    aircraft: "Bombardier Learjet 60",
    date: "Apr 18, 2026",
    passengers: 7,
    price: 3400,
    originalPrice: 9500,
  },
  {
    id: "17",
    fromCity: "San Francisco",
    fromCode: "SFO",
    toCity: "Phoenix",
    toCode: "PHX",
    aircraft: "Cessna Citation XLS+",
    date: "Apr 20, 2026",
    passengers: 8,
    price: 1900,
    originalPrice: 5500,
  },
  {
    id: "18",
    fromCity: "Seattle",
    fromCode: "SEA",
    toCity: "New York",
    toCode: "JFK",
    aircraft: "Gulfstream G650",
    date: "Apr 22, 2026",
    passengers: 16,
    price: 9800,
    originalPrice: 28000,
  },
  {
    id: "19",
    fromCity: "Miami",
    fromCode: "MIA",
    toCity: "Washington",
    toCode: "DCA",
    aircraft: "Hawker 750",
    date: "Apr 24, 2026",
    passengers: 8,
    price: 2200,
    originalPrice: 6500,
  },
  {
    id: "20",
    fromCity: "Los Angeles",
    fromCode: "LAX",
    toCity: "Chicago",
    toCode: "ORD",
    aircraft: "Bombardier Challenger 604",
    date: "Apr 26, 2026",
    passengers: 10,
    price: 4100,
    originalPrice: 11500,
  },
];

const ITEMS_PER_PAGE = 10;

export function EmptyLegsDealsSection() {
  const [searchFrom, setSearchFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");
  const [searchPassengers, setSearchPassengers] = useState("");
  const [searchDate, setSearchDate] = useState<Date | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [showSignInDialog, setShowSignInDialog] = useState(false);
  const [sortBy, setSortBy] = useState<string>("price-asc");
  const [filterMinPrice, setFilterMinPrice] = useState<string>("");
  const [filterMaxPrice, setFilterMaxPrice] = useState<string>("");
  const [filterMinPassengers, setFilterMinPassengers] = useState<string>("");

  const filteredDeals = sampleDeals
    .filter((deal) => {
      const fromMatch =
        searchFrom === "" ||
        deal.fromCity.toLowerCase().includes(searchFrom.toLowerCase()) ||
        deal.fromCode.toLowerCase().includes(searchFrom.toLowerCase());
      const toMatch =
        searchTo === "" ||
        deal.toCity.toLowerCase().includes(searchTo.toLowerCase()) ||
        deal.toCode.toLowerCase().includes(searchTo.toLowerCase());
      const minPriceMatch =
        filterMinPrice === "" || deal.price >= parseInt(filterMinPrice);
      const maxPriceMatch =
        filterMaxPrice === "" || deal.price <= parseInt(filterMaxPrice);
      const passengersMatch =
        filterMinPassengers === "" ||
        deal.passengers >= parseInt(filterMinPassengers);
      return (
        fromMatch &&
        toMatch &&
        minPriceMatch &&
        maxPriceMatch &&
        passengersMatch
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "date-asc":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "date-desc":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "passengers-desc":
          return b.passengers - a.passengers;
        default:
          return 0;
      }
    });

  const totalPages = Math.ceil(filteredDeals.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedDeals = filteredDeals.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const handleSearch = () => {
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        );
      }
    }

    return pages;
  };

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="subtitle">Available Flights</span>
          <h2 className="title mt-2">Current Empty Leg Deals</h2>
        </motion.div>

        {/* Search Bar (scrolls normally) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 lg:mb-0 rounded-lg lg:rounded-t-lg lg:rounded-b-none border border-border bg-background p-4"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:flex-nowrap">
            {/* From Input */}
            <div className="flex-1 min-w-37.5">
              <div className="relative">
                <Plane className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="From (City or Code)"
                  value={searchFrom}
                  onChange={(e) => setSearchFrom(e.target.value)}
                  className="bg-muted/50 border-border pl-9 text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring"
                />
              </div>
            </div>
            {/* To Input */}
            <div className="flex-1 min-w-37.5">
              <div className="relative">
                <Plane className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground rotate-90" />
                <Input
                  placeholder="To (City or Code)"
                  value={searchTo}
                  onChange={(e) => setSearchTo(e.target.value)}
                  className="bg-muted/50 border-border pl-9 text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring"
                />
              </div>
            </div>
            {/* Passengers Stepper */}
            <div className="flex-1 min-w-40">
              <div className="flex items-center justify-between rounded-md border border-border bg-muted/50 px-3 py-2 h-10">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">Passengers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      setSearchPassengers(
                        String(
                          Math.max(1, parseInt(searchPassengers || "1") - 1),
                        ),
                      )
                    }
                    className="h-6 w-6 border border-border text-foreground hover:bg-muted"
                  >
                    −
                  </Button>
                  <span className="w-6 text-center text-foreground text-sm">
                    {searchPassengers || "1"}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      setSearchPassengers(
                        String(
                          Math.min(20, parseInt(searchPassengers || "1") + 1),
                        ),
                      )
                    }
                    className="h-6 w-6 border border-border text-foreground hover:bg-muted"
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
            {/* Date */}
            <div className="flex-1 min-w-45">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal bg-muted/50 border-border text-foreground hover:bg-muted"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                    {searchDate ? (
                      format(searchDate, "PPP")
                    ) : (
                      <span className="text-muted-foreground">Select date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={searchDate}
                    onSelect={setSearchDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            {/* Search Button */}
            <Button
              onClick={handleSearch}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </motion.div>

        {/* Sticky Filter Bar */}
        <div className="sticky top-16 lg:top-18 z-20 mb-6 rounded-lg  lg:rounded-b-lg lg:rounded-t-none border border-border bg-background p-3 shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Left: Filter & Sort */}
            <div className="flex items-center gap-3">
              {/* Filter Popover */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-background border-border text-foreground hover:bg-muted"
                  >
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    <span className="lg:hidden">Filter</span>
                    <span className="hidden lg:inline">
                      {filterMinPrice || filterMaxPrice || filterMinPassengers
                        ? [
                            filterMinPrice && filterMaxPrice
                              ? `$${filterMinPrice}-$${filterMaxPrice}`
                              : filterMinPrice
                                ? `$${filterMinPrice}+`
                                : filterMaxPrice
                                  ? `Up to $${filterMaxPrice}`
                                  : null,
                            filterMinPassengers
                              ? `${filterMinPassengers}+ pax`
                              : null,
                          ]
                            .filter(Boolean)
                            .join(" | ")
                        : "Filter"}
                    </span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-4" align="start">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Price Range</p>
                      <div className="flex gap-2">
                        <Input
                          type="number"
                          placeholder="Min $"
                          value={filterMinPrice}
                          onChange={(e) => setFilterMinPrice(e.target.value)}
                          className="h-8 text-sm"
                        />
                        <Input
                          type="number"
                          placeholder="Max $"
                          value={filterMaxPrice}
                          onChange={(e) => setFilterMaxPrice(e.target.value)}
                          className="h-8 text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Min Passengers</p>
                      <Input
                        type="number"
                        placeholder="1+"
                        min={1}
                        value={filterMinPassengers}
                        onChange={(e) => setFilterMinPassengers(e.target.value)}
                        className="h-8 text-sm"
                      />
                    </div>
                    <Button
                      size="sm"
                      className="w-full"
                      onClick={() => setCurrentPage(1)}
                    >
                      Apply Filters
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>

              {/* Sort Popover */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-background border-border text-foreground hover:bg-muted"
                  >
                    <ArrowUpDown className="mr-2 h-4 w-4" />
                    {{
                      "price-asc": "Price: Low to High",
                      "price-desc": "Price: High to Low",
                      "date-asc": "Date: Soonest",
                      "date-desc": "Date: Latest",
                      "passengers-desc": "Passengers: Most",
                    }[sortBy] || "Sort"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-48 p-2" align="start">
                  <div className="space-y-1">
                    {[
                      { value: "price-asc", label: "Price: Low to High" },
                      { value: "price-desc", label: "Price: High to Low" },
                      { value: "date-asc", label: "Date: Soonest" },
                      { value: "date-desc", label: "Date: Latest" },
                      { value: "passengers-desc", label: "Passengers: Most" },
                    ].map((option) => (
                      <Button
                        key={option.value}
                        variant={sortBy === option.value ? "default" : "ghost"}
                        size="sm"
                        className="w-full justify-start text-sm"
                        onClick={() => {
                          setSortBy(option.value);
                          setCurrentPage(1);
                        }}
                      >
                        {option.label}
                      </Button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* Right: Results Count */}
            <p className="text-sm text-muted-foreground">
              {filteredDeals.length} flight
              {filteredDeals.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {/* Deals Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {paginatedDeals.map((deal) => (
            <div
              key={deal.id}
              className="group relative flex overflow-hidden rounded-none border border-border bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              {/* Left Section - Flight Details */}
              <div className="flex-1 p-6">
                {/* Route */}
                <div className="mb-4 flex items-center gap-3">
                  <div>
                    <p className="text-xs uppercase text-muted-foreground">
                      From
                    </p>
                    <p className="text-lg font-bold text-accent">
                      {deal.fromCity}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ({deal.fromCode})
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-xs uppercase text-muted-foreground">
                      To
                    </p>
                    <p className="text-lg font-bold text-accent">
                      {deal.toCity}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ({deal.toCode})
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Plane className="h-4 w-4" />
                    <span>{deal.aircraft}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{deal.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{deal.passengers} passengers</span>
                  </div>
                </div>
              </div>

              {/* Perforated Divider - Ticket Style */}
              <div className="relative flex w-6 flex-col items-center justify-center">
                {/* Top half-circle cutout - only curved edge visible */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-6 rounded-full bg-background border-b-2 border border-muted-foreground/40" />
                {/* Dashed line */}
                <div className="h-full border-l-2 border-dashed border-muted-foreground/40 my-3" />
                {/* Bottom half-circle cutout - only curved edge visible */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-6 w-6 rounded-full bg-background border-t-2 border border-muted-foreground/40" />
              </div>

              {/* Right Section - Price & Action */}
              <div className="flex w-32 flex-col items-center justify-center bg-secondary p-4">
                <p className="text-2xl font-bold text-primary">
                  ${deal.price.toLocaleString()}
                </p>
                <p className="text-sm text-primary/60 line-through">
                  ${deal.originalPrice.toLocaleString()}
                </p>
                <p className="mb-3 text-xs text-primary">
                  Save{" "}
                  {Math.round(
                    ((deal.originalPrice - deal.price) / deal.originalPrice) *
                      100,
                  )}
                  %
                </p>
                <Button
                  size="sm"
                  className="bg-accent text-secondary hover:bg-accent/90"
                  onClick={() => setShowSignInDialog(true)}
                >
                  Inquire
                </Button>
              </div>
            </div>
          ))}
        </motion.div>

        {/* No Results */}
        {paginatedDeals.length === 0 && (
          <div className="py-12 text-center text-muted-foreground">
            No empty leg deals found matching your search criteria.
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-2"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="h-9 w-9 border-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {renderPageNumbers().map((page, index) =>
              page === "..." ? (
                <span key={`ellipsis-${index}`} className="px-2">
                  ...
                </span>
              ) : (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="icon"
                  onClick={() => goToPage(page as number)}
                  className={`h-9 w-9 ${
                    currentPage === page
                      ? "bg-accent text-accent-foreground"
                      : "border-muted"
                  }`}
                >
                  {page}
                </Button>
              ),
            )}

            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="h-9 w-9 border-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
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
