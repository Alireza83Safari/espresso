"use client";
import { accountSidebarItem } from "@/constants/constants";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Sidebar() {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <div className="col-span-1 border-l lg:pr-0 pr-1">
      <div className="flex items-center md:justify-normal justify-center mb-4">
        <Image
          src="/image/user.png"
          className="rounded-full"
          width={60}
          height={60}
          alt=""
        />
        <p className="mr-4 lg:flex hidden">{(session as any)?.username}</p>
      </div>
      {accountSidebarItem.map((menu) => (
        <Link
          className={`block py-3 border-b ${
            pathname?.includes(menu?.href) && " border-l-4 border-l-green"
          } `}
          href={menu?.href}
          key={menu?.id}
        >
          {menu?.title}
        </Link>
      ))}
      <div className="block py-3 border-b md:text-base text-sm">خروج </div>
    </div>
  );
}