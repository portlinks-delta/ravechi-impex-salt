"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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
    <section id="gallery" className="w-full py-20 ">
      <div className="max-w-7xl mx-auto lg:px-12">
        <div className="max-w-max md:max-w-3xl mx-auto text-center mb-14">
          <a
            href="/#gallery"
            className="text-sm bg-primary w-fit mx-auto px-3 py-2 rounded text-white uppercase tracking-widest text-primary mb-3"
          >
            Gallery
          </a>

          <h2 className="text-2xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Product & Operations Showcase
          </h2>

          <p className="text-muted-foreground text-base md:text-lg">
            A glimpse of our salt production, packaging, and export process.
          </p>
        </div>

        {/* GRID */}
        <div className="px-6 md:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              onClick={() => setSelected(src)}
              className="relative cursor-pointer group overflow-hidden rounded-2xl"
            >
              <Image
                src={src}
                alt="Gallery Image"
                width={400}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
            </div>
          ))}
        </div>

        {/* LIGHTBOX */}
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
