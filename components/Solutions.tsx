"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";


const points = [
  { top: 8, left: 60 },
  { top: 34, left: 48 },
  { top: 48, left: 22 },
  { top: 60, left: 80 },
  { top: 72, left: 47 },
];

const list = [
  "Стеновые панели",
  "Потолочные плиты",
  "Алюминиевый профиль",
  "Отбойная доска",
];

export default function Solutions() {
  const [view, setView] = useState<"scheme" | "list">("scheme");

  return (
    <section id="solutions" className="mx-auto max-w-6xl px-5 py-10">
      <h2 className="mb-5 max-w-sm text-2xl font-medium">
        Интерпан — комплексные решения для вашего бизнеса
      </h2>
      <div className="mb-6 flex gap-3">
        <Button
          size="sm"
          className={`rounded-full px-6 text-[10px] ${view === "scheme" ? "bg-[#ef3e0f] hover:bg-[#d2360c]" : "border border-[#ef3e0f] bg-white text-[#ef3e0f] hover:bg-orange-50"}`}
          onClick={() => setView("scheme")}
        >
          НА СХЕМЕ
        </Button>
        <Button
          size="sm"
          className={`rounded-full px-6 text-[10px] ${view === "list" ? "bg-[#ef3e0f] hover:bg-[#d2360c]" : "border border-[#ef3e0f] bg-white text-[#ef3e0f] hover:bg-orange-50"}`}
          onClick={() => setView("list")}
        >
          СПИСКОМ
        </Button>
      </div>

      {view === "scheme" ? (
        <div className="relative h-96 rounded-md border bg-gray-50">
          <p className="absolute inset-0 flex items-center justify-center text-sm text-gray-400">
            Здесь типо жесткий проект от Миши Журавлева но вам не суждено его увидеть
          </p>
          {points.map((p, n) => (
            <button
              key={n}
              style={{ top: `${p.top}%`, left: `${p.left}%` }}
              className="absolute flex size-7 items-center justify-center rounded-full bg-[#ef3e0f] text-white"
              aria-label="Подробнее"
            >
              <Plus className="size-4" />
            </button>
          ))}
        </div>
      ) : (
        <ul className="list-disc space-y-2 pl-5 text-sm">
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
