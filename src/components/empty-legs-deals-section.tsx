"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plane,
  Calendar,
  Users,
  Search,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
];

const ITEMS_PER_PAGE = 4;

export function EmptyLegsDealsSection() {
  const [searchFrom, setSearchFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredDeals = sampleDeals.filter((deal) => {
    const fromMatch =
      searchFrom === "" ||
      deal.fromCity.toLowerCase().includes(searchFrom.toLowerCase()) ||
      deal.fromCode.toLowerCase().includes(searchFrom.toLowerCase());
    const toMatch =
      searchTo === "" ||
      deal.toCity.toLowerCase().includes(searchTo.toLowerCase()) ||
      deal.toCode.toLowerCase().includes(searchTo.toLowerCase());
    return fromMatch && toMatch;
  });

  const totalPages = Math.ceil(filteredDeals.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedDeals = filteredDeals.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
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
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
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
          <span className="text-sm font-medium uppercase tracking-wider text-accent">
            Available Flights
          </span>
          <h2 className="heading-lg mt-2">Current Empty Leg Deals</h2>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 flex flex-col gap-4 sm:flex-row"
        >
          <div className="flex-1">
            <Input
              placeholder="From (City or Code)"
              value={searchFrom}
              onChange={(e) => setSearchFrom(e.target.value)}
              className="bg-transparent border-primary placeholder:text-muted-foreground focus-visible:border-accent focus-visible:ring-accent/30"
            />
          </div>
          <div className="flex-1">
            <Input
              placeholder="To (City or Code)"
              value={searchTo}
              onChange={(e) => setSearchTo(e.target.value)}
              className="bg-transparent border-primary placeholder:text-muted-foreground focus-visible:border-accent focus-visible:ring-accent/30"
            />
          </div>
          <Button
            onClick={handleSearch}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </motion.div>

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
              className="group relative flex overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              {/* Left Section - Flight Details */}
              <div className="flex-1 p-6">
                {/* Route */}
                <div className="mb-4 flex items-center gap-3">
                  <div>
                    <p className="text-xs uppercase text-muted-foreground">
                      From
                    </p>
                    <p className="text-lg font-bold text-primary">
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
                    <p className="text-lg font-bold text-primary">
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
                    <Calendar className="h-4 w-4" />
                    <span>{deal.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{deal.passengers} passengers</span>
                  </div>
                </div>
              </div>

              {/* Perforated Divider */}
              <div className="relative flex w-8 flex-col items-center justify-center">
                <div className="absolute -top-4 h-8 w-8 rounded-full bg-background" />
                <div className="h-full border-l-2 border-dashed border-muted-foreground/30" />
                <div className="absolute -bottom-4 h-8 w-8 rounded-full bg-background" />
              </div>

              {/* Right Section - Price & Action */}
              <div className="flex w-32 flex-col items-center justify-center bg-primary/5 p-4">
                <p className="text-2xl font-bold text-accent">
                  ${deal.price.toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground line-through">
                  ${deal.originalPrice.toLocaleString()}
                </p>
                <p className="mb-3 text-xs text-green-600">
                  Save{" "}
                  {Math.round(
                    ((deal.originalPrice - deal.price) / deal.originalPrice) *
                      100
                  )}
                  %
                </p>
                <Button
                  size="sm"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Book
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
                      : "border-primary"
                  }`}
                >
                  {page}
                </Button>
              )
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
    </section>
  );
}
