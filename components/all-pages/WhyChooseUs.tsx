"use client";

import { CheckCircle } from "lucide-react";

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
    <section className="w-full py-20 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            Why Choose Us
          </h2>
        </div>

        {/* LONG CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-fr">
          {points.map((item, i) => (
            <div
              key={i}
              className="group flex items-start gap-5 p-6 h-full bg-white border border-slate-200 rounded-2xl hover:shadow-lg hover:border-sky-200 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-50 group-hover:bg-emerald-100 transition">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                  {item}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
