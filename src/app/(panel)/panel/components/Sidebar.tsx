"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { panelMenuItems } from "@/constants/constants";

export default function Sidebar() {
  const location = usePathname();

  return (
    <aside className="fixed bottom-1 right-1 top-1 min-w-[50px] overflow-auto rounded-lg bg-[#344C63] font-bold text-white sm:min-w-[60px] md:bottom-2 md:right-3 md:top-2 md:min-w-[110px] lg:min-w-[130px]">
      <Link href="dashboard" className="text-center">
        <p className="mt-4 hidden w-full justify-center text-center font-bold text-white lg:flex">
          اسپرسوگرام
        </p>
      </Link>

      <div className="lg:mt-2">
        {panelMenuItems.map((item) => (
          <Link
            className={` relative flex items-center justify-center whitespace-nowrap py-6 text-sm sm:px-4 lg:justify-normal ${
              location?.includes(item?.href) &&
              "border-l-4 border-[#8AD5D0] font-black text-[#8AD5D0]"
            }`}
            key={item.href}
            href={item.href}
          >
            <>
              {item.icon}
              <p className="hidden md:inline">{item.text}</p>
            </>
          </Link>
        ))}
      </div>
    </aside>
  );
}
