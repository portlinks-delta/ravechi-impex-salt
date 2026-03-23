"use client";

import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppWidget() {
  const phone = "919876543210";
  const message = "Hello, I am interested in your salt products.";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-5 left-5 z-50
        flex items-center
        bg-green-500 text-white
        rounded-full shadow-lg
        overflow-hidden
        transition-all duration-300 ease-in-out
        w-12 hover:w-44
        h-12
        group
      "
    >
      <div className="flex items-center justify-center w-12 h-12 shrink-0">
        <FaWhatsapp className="w-6 h-6" />
      </div>

      <span
        className="
          whitespace-nowrap
          opacity-0 translate-x-[-10px]
          group-hover:opacity-100 group-hover:w-fit
          transition-all duration-300
          text-sm font-medium
          pr-4
        "
      >
        Chat on WhatsApp
      </span>
    </a>
  );
}
