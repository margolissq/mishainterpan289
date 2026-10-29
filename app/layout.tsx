import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Интерпан",
  description: "Завод по производству огнестойких панелей",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${montserrat.className} bg-white text-[#111d22] antialiased`}>
        {children}
      </body>
    </html>
  );
}
