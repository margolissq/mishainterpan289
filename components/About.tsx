import { Factory, Flame, Layers, Shield, Wrench, Box, HardHat, Truck } from "lucide-react";

const cells = [
  { icon: Factory, text: "Производство и декорирование огнестойких стеновых панелей" },
  { icon: Flame, text: "Изготовление водо- и огнестойких потолочных плит" },
  { icon: Layers, text: "Декорирование огнестойких оснований: ГСП, СМП, ГКЛ" },
  { icon: Shield, text: "Огнестойкая отбойная доска для стен" },
  { icon: Wrench, text: "Производство и декорирование алюминиевого профиля" },
  { icon: Box, text: "Изготовление продукции по индивидуальным размерам" },
  { icon: HardHat, text: "Производство противопожарных строительных материалов" },
  { icon: Truck, text: "Осуществление доставки и монтаж продукции компании" },
];

export default function About() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-[1fr_2fr]">
        <div className="text-xs leading-relaxed">
          <h2 className="mb-4 text-2xl font-medium">О компании</h2>
          <p className="mb-4">
            Завод по производству огнестойких декоративных стеновых панелей
            «Интерпан» начал свою деятельность в 2003 году. Более десяти лет
            компания не стояла на месте: она развивалась, разрабатывала новые
            решения в области декора, предоставляя своим клиентам услуги
            высокого класса.
          </p>
          <p>
            Благодаря продуктивной и успешной работе на рынке огнестойких
            декоративных панелей компания сумела занять одну из лидирующих позиций.
          </p>
        </div>
        <div className="grid grid-cols-2 border bg-white sm:grid-cols-4">
          {cells.map(({ icon: Icon, text }) => (
            <div key={text} className="flex flex-col gap-4 border p-4 text-[11px]">
              <Icon className="size-7 text-[#ef3e0f]" strokeWidth={1.3} />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
