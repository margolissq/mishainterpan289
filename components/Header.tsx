import { Search } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "ГЛАВНАЯ", href: "#" },
  { label: "КАТАЛОГ", href: "#cases" },
  { label: "ТЕХНОЛОГИЯ МОНТАЖА", href: "#solutions" },
  { label: "ПРАЙС", href: "#presentations" },
  { label: "КЕЙСЫ", href: "#cases" },
  { label: "КОНТАКТЫ", href: "#contacts" },
];

export default function Header() {
  return (
    <header className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
      <Logo />
      <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-semibold">
        {links.map((l) => (
          <a key={l.label} href={l.href} className="hover:text-[#ef3e0f]">
            {l.label}
          </a>
        ))}
        <Search className="size-4" />
      </nav>
    </header>
  );
}
