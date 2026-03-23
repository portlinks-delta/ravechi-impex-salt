"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { title: "Home", href: "/", id: "" },
  { title: "Products", href: "#products", id: "products" },
  { title: "About Us", href: "#about", id: "about" },
  { title: "Contact", href: "#contact", id: "contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between flex-wrap flex-col md:flex-row gap-10">
          <div>
            <div className="flex mb-4 items-center">
              <Link
                href="/"
                className="font-mono text-sm w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white font-bold"
              >
                SRI
              </Link>
              <span className="ml-2 text-base font-bold">
                Shree Ravechi Impex
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Trusted exporter delivering quality products with reliability,
              transparency, and global reach.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400" />
                <a
                  href="mailto:info@sri.in"
                  className="hover:text-sky-400 transition-colors"
                >
                  info@sri.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-sky-400 transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 mt-0.5" />
                <span>Kutch, Gujarat, India</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="hover:text-sky-400 hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Shree Ravechi Impex. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
