"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const updateVisitor = async () => {
      try {
        const res = await fetch("/api/visitor-count", {
          method: "POST",
        });

        const data = await res.json();
        setCount(data.count);
      } catch (err) {
        console.error("Visitor count error:", err);
      }
    };

    updateVisitor();
  }, []);

  const [show, setShow] = useState(false);

  return (
    <div className={`fixed bottom-20 right-5 z-50`}>
      <div className="flex items-center gap-3 px-4 py-2 bg-white shadow-lg border border-slate-200 rounded-xl">
        <Eye className="w-4 h-4 text-primary" />
        <div className="text-sm">
          <p className="text-slate-500 text-xs">Visitors</p>
          <p className="font-semibold text-slate-900">{count}</p>
        </div>
      </div>
    </div>
  );
}
