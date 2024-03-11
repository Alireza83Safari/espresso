"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { panelMenuItems } from "@/constants/constants";

export default function Sidebar() {
  const location = usePathname();

  return (
    <aside className="fixed bottom-0 right-0 top-0 min-w-[50px] overflow-auto bg-green font-bold text-white xs:min-w-[60px] md:min-w-[110px] lg:min-w-[130px]">
      <Link href="dashboard" className="text-center">
        <p className="mt-4 hidden w-full justify-center text-center font-bold text-white lg:flex">
          اسپرسوگرام
        </p>
      </Link>

      <div className="lg:mt-2">
        {panelMenuItems.map((item) => (
          <div>
            <Link
              className={` text-black-700 relative flex items-center justify-center whitespace-nowrap  py-6 text-sm sm:px-4 lg:justify-normal  ${
                location?.includes(item?.href) &&
                "  border-l-4 border-[#8AD5D0] font-black text-[#8AD5D0]"
              }`}
              key={item.href}
              href={item.href}
            >
              <>
                {item.icon}
                <p className="hidden md:inline">{item.text}</p>
              </>
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
}
