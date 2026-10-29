"use client";

import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ArrowButtons from "./ArrowButtons";

const products = [
  "Панели эконом — Pixel",
  "Панели окрашенные — Econom",
  "Панели эконом — Econom Loft",
  "Панели Practic — HPL пластик",
  "Панели с натуральным шпоном — Elite",
  "Панели с ПВХ пленкой — InTerior",
  "Декоративный профиль для панелей",
  "Отбойная доска — Design",
  "Потолочные панели — INTERPAN Mercury",
  "Фасадные и цокольные панели",
  "Панели антибактериальные — Farma",
  "Плита без покрытия",
];

const clients = ["VOLMIX", "GEFEST", "X5 Retail Group", "ДИКСИ", "ИнтерТестСтрой"];

const tabClass =
  "rounded-full border border-[#ef3e0f] px-6 text-[10px] text-[#ef3e0f] data-[state=active]:bg-[#ef3e0f] data-[state=active]:text-white";

export default function Cases() {
  const [page, setPage] = useState(0);

  return (
    <section id="cases" className="mx-auto max-w-6xl px-5 py-12">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-medium">Кейсы Интерпан</h2>
        <ArrowButtons
          onPrev={() => setPage((page + 2) % 3)}
          onNext={() => setPage((page + 1) % 3)}
        />
      </div>

      <Tabs defaultValue="products">
        <TabsList className="mb-6 h-auto gap-3 bg-transparent p-0">
          <TabsTrigger value="products" className={tabClass}>ПРОДУКЦИЯ</TabsTrigger>
          <TabsTrigger value="clients" className={tabClass}>КЛИЕНТЫ</TabsTrigger>
        </TabsList>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <TabsContent value="products">
              <ul className="space-y-3 text-xs">
                {products.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="clients">
              <ul className="space-y-3 text-xs">
                {clients.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </TabsContent>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="flex aspect-square flex-col items-center justify-center gap-2 border bg-slate-50 text-gray-400"
              >
                <ImageIcon className="size-10" />
                <span className="text-xs">Фото {page * 4 + n}</span>
              </div>
            ))}
          </div>
        </div>
      </Tabs>
    </section>
  );
}
