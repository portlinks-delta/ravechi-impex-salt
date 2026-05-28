"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "motion/react";
import { scrollToView } from "@/lib/scrollToView";
import { Button } from "../ui/button";

const images = [
  "https://www.krishnasalts.com/wp-content/uploads/2024/06/salt-2.jpeg",
  "https://www.krishnasalts.com/wp-content/uploads/2024/06/salt-2.jpeg",
  "https://www.krishnasalts.com/wp-content/uploads/2024/06/salt-2.jpeg",
  "https://www.krishnasalts.com/wp-content/uploads/2024/06/salt-2.jpeg",
  "https://www.krishnasalts.com/wp-content/uploads/2024/06/salt-2.jpeg",
  "https://www.krishnasalts.com/wp-content/uploads/2024/06/salt-2.jpeg",
  "https://www.krishnasalts.com/wp-content/uploads/2024/06/salt-2.jpeg",
  "https://www.krishnasalts.com/wp-content/uploads/2024/06/salt-2.jpeg",
];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="w-full py-20">
      <div className="max-w-7xl mx-auto lg:px-12">
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

        <motion.div
          className="px-6 md:px-0"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {images.map((src, i) => (
                <CarouselItem
                  key={i}
                  className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div
                    onClick={() => setSelected(src)}
                    className="relative cursor-pointer group overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={src}
                      alt={`Gallery image ${i + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-56 object-cover transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-4 cursor-pointer" />
            <CarouselNext className="right-0 md:-right-4 cursor-pointer" />
          </Carousel>
        </motion.div>

        {/* Lightbox */}
        <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
          <DialogContent className="max-w-3xl p-0 overflow-hidden">
            {selected && (
              <Image
                src={selected}
                alt="Preview"
                width={1000}
                height={700}
                className="w-full h-auto object-cover"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
