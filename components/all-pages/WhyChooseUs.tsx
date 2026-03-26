"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { scrollToView } from "@/lib/scrollToView";

export default function WhyChooseUs() {
  const points = [
    "Reliable supply capability",
    "Competitive pricing",
    "Consistent product quality",
    "Flexible packaging options",
    "Efficient logistics support",
    "Transparent business practices",
  ];

  return (
    <section id="why-choose-us" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Button onClick={() => scrollToView("why-choose-us")}>
              Why Choose Us
            </Button>
          </motion.div>

          <motion.h2
            className="text-3xl mt-5 md:text-5xl font-bold text-slate-900 leading-tight"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            Why Choose Us
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-fr">
          {points.map((item, i) => (
            <motion.div
              key={i}
              className="group flex items-start gap-5 p-6 h-full bg-white border border-slate-200 rounded-2xl hover:shadow-lg hover:border-sky-200 transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                ease: "easeInOut",
              }}
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-50 group-hover:bg-emerald-100 transition">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                  {item}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
