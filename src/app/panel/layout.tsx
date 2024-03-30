import React from "react";
import Sidebar from "./components/Sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/authOptions";
import { redirect } from "next/navigation";
import { getUser } from "@/actions/getUser";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  var isAuthenticated = true;

  if ((session as any)?.id) {
    const user = await getUser((session as any)?.id);
    isAuthenticated = user?.role === "ADMIN" ? true : false;
  }

  return (
    <>
      {isAuthenticated ? (
        <div className="relative">
          <Sidebar />
          <section className="mx-4 pr-[50px] xs:pr-[60px] sm:mx-6 md:mx-8 md:pr-[110px] lg:pr-[130px]">
            {children}
          </section>
        </div>
      ) : (
        redirect("/login")
      )}
    </>
  );
}
