"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { panelMenuItems } from "@/constants/constants";

export default function Sidebar() {
  const location = usePathname();

  return (
    <section className="fixed top-0 right-0 bottom-0 lg:min-w-[130px] md:min-w-[110px] xs:min-w-[60px] min-w-[50px] font-bold overflow-auto bg-green text-white">
      <Link href="dashboard" className="text-center">
        <p className="w-full hidden lg:flex mt-4 text-white font-bold text-center">
          اسپرسوگرام
        </p>
      </Link>

      <div className="lg:mt-2">
        {panelMenuItems.map((item) => (
          <div>
            <Link
              className={` flex items-center lg:justify-normal justify-center text-black-700 relative  whitespace-nowrap text-sm py-6 sm:px-4  ${
                location?.includes(item?.href) &&
                "  text-[#8AD5D0] font-black border-l-4 border-[#8AD5D0]"
              }`}
              key={item.href}
              href={item.href}
            >
              <>
                {item.icon}
                <p className="md:inline hidden">{item.text}</p>
              </>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
