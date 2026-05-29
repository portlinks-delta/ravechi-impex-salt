"use client";

import { useState, useEffect, useCallback } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from "motion/react";
import { scrollToView } from "@/lib/scrollToView";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = Array.from({ length: 13 }, (_, i) => `/${i + 1}.jpeg`);

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + images.length) % images.length),
    [],
  );

  const next = useCallback(
    () => setCurrent((i) => (i + 1) % images.length),
    [],
  );

  // Auto-scroll every 3.5s, pauses when lightbox is open
  useEffect(() => {
    if (selected) return;
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [next, selected]);

  return (
    <section id="gallery" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-max md:max-w-3xl mx-auto text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Button onClick={() => scrollToView("gallery")}>Gallery</Button>
          </motion.div>

          <motion.h2
            className="text-2xl md:text-5xl font-bold text-slate-900 leading-tight mb-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            Product & Operations Showcase
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-base md:text-lg"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            A glimpse of our salt production, packaging, and export process.
          </motion.p>
        </div>

        {/* Single Image Carousel */}
        <motion.div
          className="relative w-full max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Image */}
          <div
            className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
            onClick={() => setSelected(images[current])}
          >
            <img
              key={current}
              src={images[current]}
              alt={`Gallery image ${current + 1}`}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
              loading={current === 0 ? "eager" : "lazy"}
              decoding="async"
            />
            {/* Dark hover overlay */}
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition duration-300" />
            {/* Counter badge */}
            <div className="absolute bottom-3 right-4 bg-black/50 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
              {current + 1} / {images.length}
            </div>
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 rounded-full p-2 shadow-md transition cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 rounded-full p-2 shadow-md transition cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  i === current
                    ? "w-6 h-2 bg-sky-500"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Lightbox */}
        <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
          <DialogContent className="max-w-3xl p-0 overflow-hidden">
            {selected && (
              <div className="relative w-full aspect-[16/10]">
                <img
                  src={selected}
                  alt="Preview"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
