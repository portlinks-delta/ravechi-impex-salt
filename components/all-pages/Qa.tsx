"use client";

import {
  ShieldCheck,
  FlaskConical,
  FileCheck,
  Package,
  Settings,
  RefreshCcw,
  FileText,
  Truck,
} from "lucide-react";

const features = [
  {
    title: "Raw material inspection",
    desc: "Inspection of raw materials before processing.",
    icon: ShieldCheck,
  },
  {
    title: "Laboratory testing",
    desc: "Testing for purity and moisture content.",
    icon: FlaskConical,
  },
  {
    title: "Particle size analysis",
    desc: "Analysis of particle size to meet specifications.",
    icon: Settings,
  },
  {
    title: "Packaging verification",
    desc: "Verification of packaging before dispatch.",
    icon: Package,
  },
  {
    title: "Third-party inspection",
    desc: "Optional inspection by SGS / Bureau Veritas.",
    icon: FileCheck,
  },
];
export default function Quality() {
  return (
    <section id="quality" className="w-full py-20 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-center items-center flex-col text-center max-w-3xl mx-auto mb-12">
          <a
            href="/#quality"
            className="text-sm bg-primary w-fit mx-auto px-3 py-2 rounded text-white uppercase tracking-widest text-primary mb-3"
          >
            Quality
          </a>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 leading-tight">
            Ensuring Consistent Quality at Every Stage
          </h2>

          <p className="text-slate-600 text-lg mb-4">
            Quality consistency is an important part of our supply process. We
            follow standard quality checks before dispatch to ensure the product
            meets buyer specifications
          </p>
        </div>

        {/* CARDS */}
        <div className="flex flex-wrap items-center justify-center lg:grid-cols-3 gap-6">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group border border-slate-200 rounded-2xl p-6 bg-white hover:shadow-lg hover:border-sky-200 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-50 mb-4 group-hover:bg-sky-100 transition">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
