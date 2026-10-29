"use client";

import { useState } from "react";
import ArrowButtons from "./ArrowButtons";

const partners = [
  { name: "VOLMIX", color: "text-green-700" },
  { name: "GEFEST", color: "text-red-600" },
  { name: "X5 RETAIL GROUP", color: "text-slate-800" },
  { name: "ДИКСИ", color: "text-orange-500" },
  { name: "ИНТЕРТЕСТСТРОЙ", color: "text-blue-700" },
  { name: "BELEXPO", color: "text-sky-700" },
  { name: "ОСМ", color: "text-gray-700" },
];

export default function Partners() {
  const [start, setStart] = useState(0);
  const shown = Array.from({ length: 5 }, (_, k) => partners[(start + k) % partners.length]);

  return (
    <section className="mx-auto max-w-6xl px-5 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-medium">Нам доверяют</h2>
        <ArrowButtons
          onPrev={() => setStart((start + partners.length - 1) % partners.length)}
          onNext={() => setStart((start + 1) % partners.length)}
        />
      </div>
      <div className="grid grid-cols-2 border sm:grid-cols-5">
        {shown.map((p) => (
          <div
            key={p.name}
            className={`flex h-20 items-center justify-center border text-center text-sm font-extrabold ${p.color}`}
          >
            {p.name}
          </div>
        ))}
      </div>
    </section>
  );
}
