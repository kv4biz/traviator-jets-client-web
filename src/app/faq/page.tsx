"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What types of aircraft do you offer?",
    answer:
      "We offer a diverse fleet ranging from light jets for short trips to heavy jets and VIP airliners for long-haul international travel. Our fleet includes popular models like Citation, Challenger, Gulfstream, and Global Express aircraft.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "While we can accommodate last-minute requests, we recommend booking at least 48-72 hours in advance for domestic flights and 1-2 weeks for international travel to ensure the best aircraft availability and pricing.",
  },
  {
    question: "What is included in the charter price?",
    answer:
      "Our charter prices typically include the aircraft, crew, fuel, landing fees, and basic catering. Additional services such as ground transportation, special catering requests, and international handling fees may be quoted separately.",
  },
  {
    question: "Can I bring pets on board?",
    answer:
      "Yes, we welcome pets on most of our flights. Unlike commercial airlines, your pets can travel in the cabin with you. Please inform us at the time of booking so we can make appropriate arrangements.",
  },
  {
    question: "What airports can you fly to?",
    answer:
      "Private jets can access over 5,000 airports worldwide, including smaller regional airports that commercial airlines cannot reach. This gives you more flexibility and often allows you to land closer to your final destination.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "You can request a quote through our website's contact form, by calling our 24/7 flight support team, or by emailing us directly. We typically respond within 1-2 hours with a detailed quote.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept wire transfers, major credit cards, and corporate accounts. For first-time clients, payment is typically required before the flight. Established clients may have access to invoicing options.",
  },
  {
    question: "Can I modify or cancel my booking?",
    answer:
      "Yes, modifications and cancellations are possible. Cancellation policies vary depending on how close to the departure date you cancel. We recommend reviewing our terms or speaking with your flight coordinator for specific details.",
  },
  {
    question: "Do you offer empty leg flights?",
    answer:
      "Yes, we regularly offer empty leg flights at significantly reduced rates. These are one-way flights when an aircraft needs to reposition. Check our Empty Legs page or subscribe to our newsletter for the latest deals.",
  },
  {
    question: "Is catering included?",
    answer:
      "Basic catering including beverages and light snacks is included on all flights. For longer flights or special occasions, we can arrange gourmet catering, fine dining, or accommodate specific dietary requirements upon request.",
  },
];

export default function FAQPage() {
  return (
    <>
      <PageBanner title="FAQs" breadcrumb="FAQs" />

      {/* FAQ Section */}
      <section className="relative overflow-hidden bg-accent/20 py-16 md:py-24">
        {/* Background Image - Seven Wonders */}
        <div className="absolute bottom-0 left-0 right-0 h-96 opacity-20 pointer-events-none">
          <Image
            src="/seven-wonders.webp"
            alt="Seven wonders background"
            fill
            className="object-cover object-bottom"
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-4xl px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="font-medium uppercase tracking-wider text-primary">
              Get Informations
            </span>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Frequently Asked Questions
            </h2>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border bg-background px-6 rounded-none"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
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
            <h2 className="text-center text-2xl font-bold text-primary md:text-left md:text-3xl">
              It&apos;s Time to Fly with Traviator Jets
            </h2>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Link href="/services/charter">Book Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
