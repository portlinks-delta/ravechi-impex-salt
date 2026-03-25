"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { motion } from "motion/react";
import { scrollToView } from "@/lib/scrollToView";
import { Button } from "../ui/button";

const products = [
  {
    title: "De-icing Road Salt",
    desc: "Screened and used for road and surface de-icing applications in cold climate regions.",
    images: [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
    ],
  },
  {
    title: "Industrial Salt",
    desc: "Salt used in chemical processing, textile industries, water treatment and other industrial operations. Available in different granulations depending on application.",
    images: [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
    ],
  },
  {
    title: "Food Grade Salt",
    desc: "High-purity salt suitable for food processing industries such as dairy, bakery, snacks and other manufacturing sectors.",
    images: [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
    ],
  },
  {
    title: "Refined and Non-Refined Salt",
    desc: "Processed salt with controlled purity levels and uniform particle size used in various industrial and food applications.",
    images: [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
    ],
  },
];

export default function ProductsAlt() {
  return (
    <section id="products" className="w-full py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-center items-center text-center flex-col mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Button onClick={() => scrollToView("products")}>Products</Button>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            Our Salt Product Range
          </motion.h2>

          <motion.p
            className="text-slate-600"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            We supply a wide range of salt products for industrial, food
            processing, and infrastructure applications across global markets.
          </motion.p>
        </div>

        {/* Products */}
        <div className="space-y-20">
          {products.map((product, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-10 items-center"
              >
                {/* Carousel */}
                <motion.div
                  className={`relative ${isReverse ? "md:order-2" : ""}`}
                  initial={{ opacity: 0, x: isReverse ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                >
                  <Carousel className="w-full group">
                    <CarouselContent>
                      {product.images.map((img, i) => (
                        <CarouselItem key={i}>
                          <img
                            src={img}
                            alt={`${product.title}-${i}`}
                            className="w-full h-[350px] object-cover rounded-2xl shadow-lg"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 cursor-pointer" />
                    <CarouselNext className="right-2 cursor-pointer" />
                  </Carousel>
                </motion.div>

                {/* Text */}
                <motion.div
                  className={isReverse ? "md:order-1" : ""}
                  initial={{ opacity: 0, x: isReverse ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                >
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                    {product.title}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {product.desc}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
