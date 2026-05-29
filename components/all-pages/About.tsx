"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { scrollToView } from "@/lib/scrollToView";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 py-20  text-slate-900"
    >
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Button onClick={() => scrollToView("products")}>About Us</Button>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          Shree Ravechi Impex Delivering High-Quality Salt
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-primary font-medium"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          From India to the World
        </motion.p>
      </div>

      <div className="">
        <div>
          <motion.p
            className="text-lg text-foreground mb-6 text-justify"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            We are a producer and exporter of high-quality salt based in the
            Kutch region of Gujarat, India — one of the world's largest natural
            salt producing areas. With strategic proximity to Mundra Port, we
            supply a wide range of salt products to industrial, food processing
            and infrastructure sectors across international markets.
          </motion.p>

          <motion.p
            className="text-lg text-foreground mb-8 text-justify"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            We focus on consistent quality, dependable supply and transparent
            export practices, enabling our partners to source salt from India
            with confidence.
            <br />
            <br />
            We work with importers, distributors and industrial users across
            multiple sectors that require consistent salt quality for their
            operations.
          </motion.p>

          <div className="grid grid-cols-2 w-full items-center justify-center gap-4">
            {[
              "Strategic location near Mundra Port",
              "Wide range of salt grades & granulations",
              "Flexible packaging options",
              "Third-party inspection available (SGS / BV)",
              "Reliable export documentation & logistics",
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              >
                <CheckCircle className="text-emerald-500 w-5 h-5 mt-1" />
                <p className="text-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
