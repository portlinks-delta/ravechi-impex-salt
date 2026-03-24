"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { NumberTicker } from "./number-ticker";

export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const updateVisitor = async () => {
      try {
        const res = await fetch("/api/visitor-count", {
          method: "POST",
        });

        const data = await res.json();

        setCount(data.totalVisits);
      } catch (err) {
        console.error("Visitor count error:", err);
      }
    };

    updateVisitor();
  }, []);

  return (
    <div className="fixed bottom-20 right-5 z-50">
      <div className="flex justify-center items-center gap-3 px-4 py-2 bg-white shadow-lg border border-slate-200 rounded-xl">
        <div className="flex items-center justify-center gap-2">
          <Eye className="w-4 h-4 text-primary" />
          <span className="font-medium">Visitors:</span>
        </div>
        <NumberTicker value={count || 0} />
      </div>
    </div>
  );
}
