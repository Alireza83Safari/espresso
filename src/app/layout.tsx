import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "اسپرسوگرام | فروشگاه آنلاین اسپرسوگرام",
  description: "اسپرسوگرام",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className=" overflow-x-hidden">
      <body>{children}</body>
    </html>
  );
}
