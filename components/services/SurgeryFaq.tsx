"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function SurgeryFaq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-100">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="py-4 first:pt-0 last:pb-0">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="font-bold text-ink">{item.q}</span>
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-700">
                {isOpen ? <Minus size={14} /> : <Plus size={14} />}
              </span>
            </button>
            {isOpen && <p className="mt-3 text-sm leading-6 text-slate-600">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
