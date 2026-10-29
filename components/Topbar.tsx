import { Mail, Phone } from "lucide-react";
import Socials from "./Socials";

export default function Topbar() {
  return (
    <div className="border-b text-xs">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-1 px-5 py-2">
        <span className="flex items-center gap-2">
          <Mail className="size-4 text-[#ef3e0f]" /> info@interpan.ru
        </span>
        <span className="flex items-center gap-2">
          <Phone className="size-4 text-[#ef3e0f]" /> +7 (495) 730-55-01
        </span>
        <a href="#consult" className="font-medium text-[#ef3e0f]">
          ОСТАВИТЬ ЗАЯВКУ
        </a>
        <Socials />
      </div>
    </div>
  );
}
