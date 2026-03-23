"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function GoToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-sky-600 text-white shadow-lg hover:bg-sky-700 transition"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
