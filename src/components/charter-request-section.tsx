"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { content } from "@/content";
import { CharterRequestForm } from "@/components/charter-request-form";

export function CharterRequestSection() {
  const { charterRequest } = content.home;

  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Half World Image - Extreme Left with Animation */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: [0, 10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none"
      >
        <Image
          src={charterRequest.images.world}
          alt="World"
          width={300}
          height={600}
          className="h-auto w-auto max-h-125 opacity-10 lg:opacity-20"
        />
      </motion.div>

      {/* Main Content Grid - 3 Columns, No Gap */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-10 h-160">
        {/* Columns 1-2: Form Area */}
        <div className="relative lg:col-span-3 px-6 py-8 lg:px-24 lg:py-10 flex justify-end">
          {/* Airplane Stacks Image - Bottom Right of Form Area */}
          <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: [0, 10, 0], y: [0, 5, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 right-0 lg:-right-64 z-0 pointer-events-none"
          >
            <Image
              src={charterRequest.images.airplane}
              alt="Airplane"
              width={200}
              height={200}
              className="h-auto w-auto max-w-45 opacity-10 lg:opacity-20"
            />
          </motion.div>

          {/* Form Content */}
          <div className="relative z-10 max-w-xl max-h-full overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-medium uppercase tracking-wider text-accent">
                {charterRequest.subtitle}
              </span>
              <h2 className="heading-lg mt-2 text-white">
                {charterRequest.title}
              </h2>
              <p className="mt-4 text-white/70">{charterRequest.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            >
              <CharterRequestForm />
            </motion.div>
          </div>
        </div>

        {/* Column 3: Request Image */}
        <div className="relative hidden lg:block lg:col-span-2 h-full w-full z-20">
          <Image
            src={charterRequest.images.request}
            alt="Charter Request"
            fill
            className="object-fill w-full h-full z-10"
          />
        </div>
      </div>
    </section>
  );
}
