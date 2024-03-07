import type { Metadata } from "next";
import "./globals.css";
import AuthContext from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <AuthContext>
          <Header />
          {children}
          <Footer />
        </AuthContext>
        <Toaster />
      </body>
    </html>
  );
}
