"use client";

import { useState } from "react";
import { Percent, Calculator } from "lucide-react";
import ArrowButtons from "./ArrowButtons";

const slides = [
  {
    title: "Декоративная фактура Pixel",
    text: "Панели INTERPAN Econorm PIXEL — уникальный инновационный листовой материал, имитирующий фактуру натурального гипса.",
  },
  {
    title: "Огнестойкие панели",
    text: "Стеновые панели для офисов и общественных зданий любых размеров.",
  },
  {
    title: "Потолочные плиты",
    text: "Водо- и огнестойкие плиты с декоративным покрытием.",
  },
];

export default function Hero() {
  const [i, setI] = useState(0);
  const prev = () => setI((i + slides.length - 1) % slides.length);
  const next = () => setI((i + 1) % slides.length);

  return (
    <section className="mx-auto grid max-w-6xl gap-4 px-5 lg:grid-cols-[2fr_1fr]">
      
      <div className="relative flex min-h-72 flex-col justify-center rounded-md bg-gradient-to-r from-stone-700 to-stone-400 p-8 text-white">
        <h2 className="mb-3 max-w-xs text-3xl font-bold">{slides[i].title}</h2>
        <p className="max-w-xs text-xs">{slides[i].text}</p>
        <div className="absolute bottom-4 right-4">
          <ArrowButtons onPrev={prev} onNext={next} />
        </div>
      </div>

      
      <div className="grid gap-4">
        <div className="flex min-h-32 flex-col justify-end rounded-md bg-[#ef3e0f] p-4 text-white">
          <Percent className="mb-2 size-8" />
          <p className="text-xs font-medium">Распродажа отбойной доски Интерпан</p>
        </div>
        <div className="flex min-h-32 flex-col justify-end rounded-md bg-[#111d22] p-4 text-white">
          <Calculator className="mb-2 size-8 text-[#ef3e0f]" />
          <p className="text-xs font-medium">
            Калькулятор — рассчитать количество панелей для помещения
          </p>
        </div>
      </div>
    </section>
  );
}
