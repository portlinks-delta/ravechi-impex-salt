"use client";

import { CheckCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="w-full py-20 bg-slate-50 text-slate-900">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Link
            href="/#about"
            className="text-sm bg-primary w-fit mx-auto px-3 py-2 rounded text-white uppercase tracking-widest mb-3 inline-block"
          >
            About Us
          </Link>
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

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.p
            className="text-lg text-foreground mb-6"
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
            className="text-lg text-foreground mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            We focus on consistent quality, dependable supply and transparent
            export practices, enabling our partners to source salt from India
            with confidence.
            <br />
            We work with importers, distributors and industrial users across
            multiple sectors that require consistent salt quality for their
          </motion.p>

          <div className="space-y-4">
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

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.97, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {[
                "https://www.krishnasalts.com/wp-content/uploads/2024/06/salt-2.jpeg",
                "https://www.krishnasalts.com/wp-content/uploads/2024/01/triple-refined-free-flow-Iodized-salt-1.jpg",
                "https://www.krishnasalts.com/wp-content/uploads/2024/01/industrial-salt-freeflow-500x500-1.png",
              ].map((src, index) => (
                <CarouselItem key={index}>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      width={500}
                      height={500}
                      src={src}
                      alt={`Salt Image ${index + 1}`}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 cursor-pointer" />
            <CarouselNext className="right-2 cursor-pointer" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
