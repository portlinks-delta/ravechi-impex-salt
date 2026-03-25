"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import SlotCounter from "react-slot-counter";

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
    <div className="cursor-pointer text-white w-fit mx-auto z-50">
      <div className="flex justify-center text-center items-center gap-3 px-4 py-2 shadow-lg border border-border/20 rounded-xl">
        <div className="flex items-center justify-center gap-2">
          <Eye className="w-4 h-4 text-primary" />
          <span className="font-medium text-background">Visitors:</span>
        </div>
        <span className="font-bold font-mono text-lg">
          {count !== null ? (
            <SlotCounter
              animateOnVisible
              animateUnchanged
              value={count.toString().padStart(3, "0").split("")}
            />
          ) : (
            <div className="w-[60px] h-[1em]" />
          )}
        </span>
      </div>
    </div>
  );
}
