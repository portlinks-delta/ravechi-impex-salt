"use client";

import { EMAIL, FORMATTED_PHONE_NUMBER } from "@/constants";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import VisitorCount from "../ui/VisitCount";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Products", href: "/#products" },
  { title: "About Us", href: "/#about" },
  { title: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center mb-5">
              <Link
                href="/"
                className="w-8 h-8 flex text-xs items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 text-white font-bold text-sm shadow-md"
              >
                SRI
              </Link>
              <span className="ml-2 md:ml-3 text-sm md:text-lg font-bold tracking-wide">
                Shree Ravechi Impex
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Reliable exporter of high-quality salt products from Gujarat,
              India — delivering consistency, transparency, and global logistics
              excellence.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base mb-5 tracking-wide">
              Contact Information
            </h3>

            <div className="space-y-4 text-sm">
              <a
                href="mailto:info@sri.in"
                className="flex items-center gap-3 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                {EMAIL}
              </a>

              <a
                href={`tel:${FORMATTED_PHONE_NUMBER}`}
                className="flex items-center gap-3 hover:text-sky-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400" />{" "}
                {FORMATTED_PHONE_NUMBER}
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 mt-1" />
                <span className="">Kutch, Gujarat, India</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base mb-5 tracking-wide">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="group hover:translate-x-1  flex items-center gap-2 hover:text-sky-400 transition-all duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 opacity-0 group-hover:opacity-100 transition" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p className="text-center text-xs md:text-sm py-2">
            © {new Date().getFullYear()} Shree Ravechi Impex. All rights
            reserved.
          </p>

          <p className="text-slate-400 flex items-center gap-2">
            Designed & developed by{" "}
            <a
              href="https://portlinksindia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sky-400 font-medium hover:text-sky-300 transition-colors"
            >
              <img
                src="/pli-logo.svg"
                alt="PortLinks India"
                className="w-28 h-28 brightness-0 invert opacity-80"
              />
            </a>
          </p>
        </div>
      </div>
      <VisitorCount />
    </footer>
  );
}
