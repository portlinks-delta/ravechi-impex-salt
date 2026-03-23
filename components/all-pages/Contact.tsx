"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import RequestQuote from "../ui/RequestQuote";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">
            Contact Us
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Shree Ravechi Impex
          </h2>

          <p className="text-muted-foreground text-lg">
            Get in touch for product inquiries, quotations, and export
            requirements.
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 border border-slate-200 rounded-2xl text-center hover:shadow-md transition">
            <Mail className="w-6 h-6 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
            <p className="text-slate-600 text-sm">info@sri.in</p>
          </div>

          <div className="p-6 border border-slate-200 rounded-2xl text-center hover:shadow-md transition">
            <Phone className="w-6 h-6 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
            <p className="text-slate-600 text-sm">+91 98765 43210</p>
          </div>

          <div className="p-6 border border-slate-200 rounded-2xl text-center hover:shadow-md transition">
            <MapPin className="w-6 h-6 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-slate-900 mb-1">Location</h3>
            <p className="text-slate-600 text-sm">Kutch, Gujarat, India</p>
          </div>
        </div>

        <RequestQuote />
      </div>
    </section>
  );
}
