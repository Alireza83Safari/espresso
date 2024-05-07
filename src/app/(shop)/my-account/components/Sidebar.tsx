"use client";
import { accountSidebarItem } from "@/constants/constants";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React from "react";

export default function Sidebar() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const logoutHanlder = () => {
    signOut();
    redirect("/");
  };

  return (
    <aside className="border-l pr-1 md:w-[15rem] lg:pr-0">
      <div className="mb-4 flex items-center justify-center md:justify-normal">
        <Image
          src="/image/user.png"
          className="rounded-full"
          width={60}
          height={60}
          alt=""
        />
        <p className="mr-4 flex text-lg md:hidden lg:flex lg:text-base">
          {(session as any)?.username}
        </p>
      </div>
      {accountSidebarItem.map((menu) => (
        <Link
          className={`block border-b px-5 py-3 md:px-0 ${
            pathname?.includes(menu?.href) && " border-l-4 border-l-green"
          } `}
          href={menu?.href}
          key={menu?.id}
        >
          {menu?.title}
        </Link>
      ))}
      <div
        className="block border-b px-5 py-3 text-sm md:px-0 md:text-base"
        onClick={logoutHanlder}
      >
        خروج{" "}
      </div>
    </aside>
  );
}
