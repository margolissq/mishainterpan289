import { FileText } from "lucide-react";

export default function Presentations() {
  return (
    <section id="presentations" className="grid md:grid-cols-2">
      <div className="bg-[#111d22] px-8 py-12 text-white md:pl-[max(1.25rem,calc((100vw-72rem)/2+1.25rem))]">
        <h2 className="max-w-xs text-2xl">Посмотрите презентации о наших продуктах</h2>
      </div>
      <div className="flex flex-wrap items-center gap-8 bg-[#ef3e0f] px-8 py-12 text-white">
        <a href="#" className="flex items-center gap-3 text-xs">
          <FileText className="size-8" /> Стеновые панели Интерпан
        </a>
        <a href="#" className="flex items-center gap-3 text-xs">
          <FileText className="size-8" /> Потолочные панели Интерпан
        </a>
      </div>
    </section>
  );
}
