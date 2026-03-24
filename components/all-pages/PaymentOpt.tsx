"use client";

import { CreditCard, Landmark } from "lucide-react";
import { motion } from "motion/react";

export default function PaymentOptions() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 rounded-3xl w-full py-16 mb-10 bg-accent">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.p
          className="text-sm text-center uppercase tracking-widest text-primary mb-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: "easeIn" }}
        >
          Payment Terms
        </motion.p>

        <motion.h2
          className="text-center text-2xl md:text-4xl font-bold text-slate-900 mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeIn" }}
        >
          Payment Options
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            className="flex items-center gap-4 p-6 rounded-2xl border border-border bg-white hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, ease: "easeIn" }}
          >
            <div className="p-3 rounded-xl bg-primary text-white">
              <CreditCard className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-slate-900">Advance Payment</p>
              <p className="text-sm text-slate-500">
                Pay upfront before shipment
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-4 p-6 rounded-2xl border border-border bg-white hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, ease: "easeIn" }}
          >
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <Landmark className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-slate-900">
                Letter of Credit (LC)
              </p>
              <p className="text-sm text-slate-500">
                Bank-secured international payment
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
