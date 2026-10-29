"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Consultation() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="consult" className="bg-[#111d22] text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-2">
        <div>
          <h2 className="mb-6 max-w-sm text-xl text-[#ef3e0f]">
            У вас есть проект для нас или необходима консультация?
          </h2>
          <p className="max-w-xs text-sm">
            Наш специалист свяжется с вами и ответит на все вопросы.
          </p>
        </div>

        {sent ? (
          <p className="self-center text-lg">Спасибо! Мы скоро свяжемся с вами.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-wrap items-end gap-6 self-center">
            <Input
              required
              placeholder="Ваше имя"
              className="w-44 rounded-none border-0 border-b border-white/60 bg-transparent px-0 text-white placeholder:text-white focus-visible:ring-0"
            />
            <Input
              required
              type="tel"
              placeholder="Телефон"
              className="w-44 rounded-none border-0 border-b border-white/60 bg-transparent px-0 text-white placeholder:text-white focus-visible:ring-0"
            />
            <Button type="submit" className="rounded-full bg-[#ef3e0f] px-8 text-[10px] hover:bg-[#d2360c]">
              ОТПРАВИТЬ
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
