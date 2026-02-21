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
    title: "Many Airports",
    Icon: IoRocket,
  },
];

export function FeaturesSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#e0d42d",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='24' viewBox='0 0 88 24'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='autumn' fill='%23b6ac25' fill-opacity='0.14'%3E%3Cpath d='M10 0l30 15 2 1V2.18A10 10 0 0 0 41.76 0H39.7a8 8 0 0 1 .3 2.18v10.58L14.47 0H10zm31.76 24a10 10 0 0 0-5.29-6.76L4 1 2 0v13.82a10 10 0 0 0 5.53 8.94L10 24h4.47l-6.05-3.02A8 8 0 0 1 4 13.82V3.24l31.58 15.78A8 8 0 0 1 39.7 24h2.06zM78 24l2.47-1.24A10 10 0 0 0 86 13.82V0l-2 1-32.47 16.24A10 10 0 0 0 46.24 24h2.06a8 8 0 0 1 4.12-4.98L84 3.24v10.58a8 8 0 0 1-4.42 7.16L73.53 24H78zm0-24L48 15l-2 1V2.18A10 10 0 0 1 46.24 0h2.06a8 8 0 0 0-.3 2.18v10.58L73.53 0H78z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
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
