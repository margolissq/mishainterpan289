import { ChevronLeft, ChevronRight } from "lucide-react";


export default function ArrowButtons({
  onPrev,
  onNext,
}: {
  onPrev?: () => void;
  onNext?: () => void;
}) {
  const cls =
    "flex size-8 items-center justify-center rounded-full bg-[#ef3e0f] text-white hover:bg-[#d2360c]";
  return (
    <div className="flex gap-2">
      <button className={cls} onClick={onPrev} aria-label="Назад">
        <ChevronLeft className="size-5" />
      </button>
      <button className={cls} onClick={onNext} aria-label="Вперёд">
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}
