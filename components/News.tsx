import { Image as ImageIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

const small = [
  { title: "Строительная выставка ОСМ-2017", date: "21.03.2017" },
  { title: "Выставка СТРОЙЭКСПО 2016 в Минске", date: "30.03.2016" },
  { title: "Строительная выставка ОСМ-2016", date: "06.02.2016" },
  { title: "Выставка в Москве ОСМ 2015", date: "03.02.2015" },
];

function Photo({ className }: { className: string }) {
  return (
    <div className={`flex items-center justify-center bg-slate-200 text-slate-400 ${className}`}>
      <ImageIcon className="size-10" />
    </div>
  );
}

export default function News() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12">
      <h2 className="mb-6 text-2xl font-medium">Новости компании</h2>
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="gap-0 overflow-hidden p-0 md:col-span-2 md:row-span-2">
          <Photo className="h-64" />
          <div className="p-4 text-xs">
            <h3 className="mb-2 font-semibold">Открытие представительства в Крыму</h3>
            <p className="mb-3 text-gray-600">
              Многолетний опыт работы на рынке огнестойкой продукции позволяет
              нам открывать новые представительства в новых городах.
            </p>
            <span className="text-gray-400">06.06.2018</span>
          </div>
        </Card>
        {small.map((n) => (
          <Card key={n.title} className="gap-0 overflow-hidden p-0">
            <Photo className="h-24" />
            <div className="p-3 text-xs">
              <h3 className="mb-3 font-medium">{n.title}</h3>
              <span className="text-gray-400">{n.date}</span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
