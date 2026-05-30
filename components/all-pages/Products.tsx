"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { scrollToView } from "@/lib/scrollToView";
import { Button } from "../ui/button";
import { Package } from "lucide-react";

const products = [
  {
    title: "De-icing Road Salt",
    desc: "Screened de-icing salt produced for reliable ice melting performance and snow management on roads, parking areas, industrial surfaces and cold storage management in winter conditions.",
    image: "/D1.jpeg",
  },
  {
    title: "Industrial Salt",
    desc: "High-quality salt suitable for chemical processing, water treatment, textile industries and various industrial applications.",
    image: "https://placehold.co/600x400",
  },
  {
    title: "Food Grade Salt",
    desc: "High-purity salt used in dairy, bakery, snack processing and other food manufacturing applications.",
    image: "https://placehold.co/600x400",
  },
  {
    title: "Refined and Non-Refined Salt",
    desc: "Processed and natural salt is available in different purity levels and granulometries for industrial and food applications, and is used in detergents, soaps, soda ash production, chemical processing, and various other industrial applications.",
    image: "https://placehold.co/600x400",
  },
];

const packagingSizes = ["25 KG", "50 KG", "1 MT", "Custom Bag Size"];

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
            className="text-slate-600 text-justify"
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
                {/* Image */}
                <motion.div
                  className={`relative ${isReverse ? "md:order-2" : ""}`}
                  initial={{ opacity: 0, x: isReverse ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                >
                  <div className="relative w-full aspect-[4/3]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
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
                  <p className="text-slate-600 text-lg leading-relaxed text-justify">
                    {product.desc}
                  </p>
                  <div className="flex items-center gap-2 mt-4 flex-wrap">
                    <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                      Size:
                    </span>
                    {packagingSizes.map((size) => (
                      <span
                        key={size}
                        className="px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-sm font-medium"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
