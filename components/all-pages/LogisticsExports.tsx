"use client";

import { Ship, Package, FileText, Globe, Truck, Boxes } from "lucide-react";

export default function LogisticsExports() {
  const features = [
    {
      title: "Export Capability",
      desc: "Monthly supply capacity: Approximately 10,000 MT.",
      icon: Boxes,
    },
    {
      title: "Packing Options",
      desc: "Bulk vessel, 1 MT jumbo bags, 25kg & 50kg bags, containerized shipments.",
      icon: Package,
    },
    {
      title: "Export Documentation",
      desc: "Complete export documentation prepared for shipments.",
      icon: FileText,
    },
    {
      title: "Freight Coordination",
      desc: "Coordination with international freight forwarders.",
      icon: Truck,
    },
    {
      title: "Flexible Shipments",
      desc: "Flexible shipment arrangements based on requirements.",
      icon: Ship,
    },
    {
      title: "Inspection Support",
      desc: "Third-party inspection support available.",
      icon: Globe,
    },
  ];

  return (
    <section id="logistics" className="w-full py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <a
            href="/#logistics"
            className="text-sm bg-primary w-fit mx-auto px-3 py-2 rounded text-white uppercase tracking-widest text-primary mb-3"
          >
            Logistics
          </a>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Efficient Export and Logistics Operations
          </h2>

          <p className="text-slate-600 text-lg">
            Operations benefit from proximity to Mundra Port, enabling efficient
            export shipments.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-sky-200 transition-all duration-300"
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

        {/* FOOT NOTE */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 max-w-2xl mx-auto">
            Our logistics network allows us to serve buyers across Asia, the
            Middle East, Europe and other regions.
          </p>
        </div>
      </div>
    </section>
  );
}
