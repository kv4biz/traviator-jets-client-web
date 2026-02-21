"use client";

import { motion } from "framer-motion";
import {
  IoDiamond,
  IoShieldCheckmark,
  IoCalendar,
  IoRocket,
} from "react-icons/io5";

const features = [
  {
    title: "Luxury & Comfort",
    Icon: IoDiamond,
  },
  {
    title: "Safe & Secure",
    Icon: IoShieldCheckmark,
  },
  {
    title: "Personal Scheduled",
    Icon: IoCalendar,
  },
  {
    title: "Many Efforts",
    Icon: IoRocket,
  },
];

export function FeaturesSection() {
  return (
    <section
      className="pattern-1 relative overflow-hidden"
      style={{ backgroundColor: "#b6ac25" }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-48 pb-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="relative flex flex-col items-center gap-4 rounded-none border border-[#8a8220] bg-transparent p-6 text-center transition-all duration-300 overflow-hidden">
                {/* Hover effect - white spread from center */}
                <div className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />

                {/* Icon */}
                <feature.Icon className="relative z-10 h-10 w-10 text-accent-foreground group-hover:text-accent transition-colors duration-300" />

                {/* Title */}
                <h3 className="relative z-10 text-sm font-semibold uppercase tracking-wider text-accent-foreground group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
