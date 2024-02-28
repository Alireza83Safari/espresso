import type { Metadata } from "next";
import "./globals.css";
import AuthContext from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";

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
    <html lang="fa" dir="rtl" className="overflow-x-hidden">
      <body>
        <AuthContext>{children}</AuthContext>
        <Toaster />
      </body>
    </html>
  );
}
