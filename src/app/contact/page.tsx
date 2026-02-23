"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

import { PageBanner } from "@/components/page-banner";
import { content } from "@/content";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const { contact } = content;

  return (
    <>
      <PageBanner title="Contact Us" breadcrumb="Contact" />

      <div className="mx-auto w-full max-w-6xl px-4 py-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="font-medium uppercase tracking-wider text-accent">
            {contact.subtitle}
          </span>
          <h2 className="heading-xl mt-2 max-w-2xl mx-auto">{contact.title}</h2>
        </motion.div>

        {/* 3 Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contact.cards.map((card, index) => {
            const IconComponent = { MapPin, Mail, Phone }[card.icon];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Card className="h-full group p-6">
                  <CardContent className="flex flex-col gap-4 p-0">
                    {/* Row 1: Title+Subtitle (col 1) and Icon (col 2) */}
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold">{card.title}</h3>
                        <p className="text-2xl font-bold">{card.subtitle}</p>
                      </div>
                      <IconComponent className="h-10 w-10 text-accent group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    {/* Row 2: Content */}
                    <div className="space-y-1 text-left">
                      {card.content.map((item) => (
                        <p key={item} className="text-sm text-muted-foreground">
                          {item}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Contact Form - Full Width Light Accent Background */}
      <div className="w-full bg-accent/5 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto px-4"
        >
          <form className="space-y-4">
            <Input
              placeholder={contact.form.name}
              className="h-12 border-primary"
            />
            <Input
              type="email"
              placeholder={contact.form.email}
              className="h-12 border-primary"
            />
            <Input
              type="tel"
              placeholder={contact.form.phone}
              className="h-12 border-primary"
            />
            <Textarea
              placeholder={contact.form.message}
              className="min-h-32 border-primary"
            />
            <Button type="submit" size="lg" className="w-full">
              {contact.form.submit}
            </Button>
          </form>
        </motion.div>
      </div>

      {/* Map Embed - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full h-96 bg-muted"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        />
      </motion.div>
    </>
  );
}
