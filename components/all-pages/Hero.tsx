"use client";

import { Button } from "@/components/ui/button";
import RequestQuote from "../ui/RequestQuote";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { motion } from "motion/react";
import { scrollToView } from "@/lib/scrollToView";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          fill
          src="/salt-1.png"
          alt="Salt background"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-24 flex flex-col items-center text-center">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Badge className="px-2 py-3 md:px-4 md:py-4 text-[0.65rem] sm:text-sm tracking-widest uppercase font-semibold border border-white/20 bg-white/10 text-white backdrop-blur-sm rounded-full shadow-md">
            Trusted Global Salt Exporter from India
          </Badge>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.12] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.9)] mb-5 sm:mb-7"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          Reliable Supplier of{" "}
          <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-400 drop-shadow-none">
            Industrial &amp; Food Grade Salt
          </span>
        </motion.h1>

        <motion.div
          className="w-16 h-[3px] rounded-full bg-gradient-to-r from-sky-400 to-blue-500 mb-6 sm:mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        />

        <motion.p
          className="text-sm sm:text-lg md:text-xl font-medium text-white/80 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed tracking-wide [text-shadow:0_1px_12px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
        >
          Sourced from the rich salt fields of{" "}
          <span className="text-white font-semibold">Gujarat, India</span> —
          delivering consistent quality, global logistics reliability, and
          transparent export practices for industries worldwide.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
        >
          <RequestQuote />
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToView("products")}
            className="w-full sm:w-auto border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
          >
            View Products
          </Button>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs sm:text-sm text-white/50 tracking-wider uppercase font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <span>ISO Certified</span>
          <span className="text-white/20">|</span>
          <span>50+ Countries Served</span>
          <span className="text-white/20">|</span>
          <span>FSSAI Approved</span>
          <span className="text-white/20">|</span>
          <span>Bulk &amp; Container Shipments</span>
        </motion.div>
      </div>
    </section>
  );
}
