"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import RequestQuote from "../ui/RequestQuote";
import Link from "next/link";
import { motion } from "motion/react";
import { scrollToView } from "@/lib/scrollToView";
import { Button } from "../ui/button";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Button onClick={() => scrollToView("contact")}>Contact Us</Button>
          </motion.div>

          <motion.h2
            className="text-3xl my-3 md:text-5xl font-bold text-slate-900 leading-tight mb-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            Shree Ravechi Impex
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            Get in touch for product inquiries, quotations, and export
            requirements.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            className="p-6 border border-slate-200 rounded-2xl text-center hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0, ease: "easeOut" }}
          >
            <Mail className="w-6 h-6 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
            <p className="text-slate-600 text-sm">info@sri.in</p>
          </motion.div>

          <motion.div
            className="p-6 border border-slate-200 rounded-2xl text-center hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
          >
            <Phone className="w-6 h-6 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
            <p className="text-slate-600 text-sm">+91 98765 43210</p>
          </motion.div>

          <motion.div
            className="p-6 border border-slate-200 rounded-2xl text-center hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
          >
            <MapPin className="w-6 h-6 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-slate-900 mb-1">Location</h3>
            <p className="text-slate-600 text-sm">Kutch, Gujarat, India</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <RequestQuote />
        </motion.div>
      </div>
    </section>
  );
}
