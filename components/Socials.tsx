export default function Socials() {
  const items = [
    { label: "f", color: "bg-[#3b5998]" },
    { label: "vk", color: "bg-[#4a76a8]" },
    { label: "▶", color: "bg-[#e62117]" },
  ];
  return (
    <div className="flex gap-2">
      {items.map((s) => (
        <a
          key={s.label}
          href="#"
          className={`flex size-5 items-center justify-center rounded-md text-[10px] font-bold text-white ${s.color}`}
        >
          {s.label}
        </a>
      ))}
    </div>
  );
}
