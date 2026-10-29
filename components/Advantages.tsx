import { ShieldCheck, Factory, Box, Truck } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Более 15 лет на рынке", text: "Большой опыт в производстве панелей под любые задачи" },
  { icon: Factory, title: "Собственное производство", text: "Мы контролируем стоимость и качество нашей продукции" },
  { icon: Box, title: "Индивидуальный подход", text: "Изготовим панели индивидуальных размеров" },
  { icon: Truck, title: "Доставка и монтаж", text: "Выполняем работы под ключ от производства до установки" },
];

export default function Advantages() {
  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ icon: Icon, title, text }) => (
        <div key={title} className="flex items-start gap-3">
          <Icon className="size-9 shrink-0" strokeWidth={1.2} />
          <div>
            <h3 className="text-xs font-bold">{title}</h3>
            <p className="text-[11px] text-gray-600">{text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
