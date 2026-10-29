import { Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import Socials from "./Socials";

const menu = [
  { label: "Главная", href: "#" },
  { label: "Каталог", href: "#cases" },
  { label: "Технология монтажа", href: "#solutions" },
  { label: "Прайс", href: "#presentations" },
  { label: "Кейсы", href: "#cases" },
  { label: "Контакты", href: "#contacts" },
];

export default function Footer() {
  return (
    <footer id="contacts" className="mx-auto max-w-6xl px-5 pt-10">
      <div className="grid gap-8 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-[11px] text-gray-600">
            SEO текст для проникновения сайта в поисковиках содержит ключевые
            слова, теги или другую информацию, которая может быть неинтересна
            пользователю, но поможет в поисковом продвижении сайта.
          </p>
        </div>

        <div>
          <h3 className="mb-3 font-medium">Меню</h3>
          <ul className="space-y-1 text-[11px] font-semibold">
            {menu.map((m) => (
              <li key={m.label}>
                <a href={m.href}>{m.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-medium">Связаться с нами</h3>
          <p className="mb-2 flex items-center gap-2 text-[11px]">
            <Phone className="size-4 text-[#ef3e0f]" /> +7 (495) 730-55-01
          </p>
          <p className="mb-4 flex items-center gap-2 text-[11px]">
            <Mail className="size-4 text-[#ef3e0f]" /> info@interpan.ru
          </p>
          <p className="mb-2 text-[11px]">Мы в социальных сетях:</p>
          <Socials />
        </div>
      </div>

      <p className="mt-10 border-t py-5 text-[11px] text-gray-400">
      Работа выполнена Журавлевом Михаилом ИС 28/9
      </p>
    </footer>
  );
}
