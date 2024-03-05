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
          <div className="lg:pr-[130px] md:pr-[110px] xs:pr-[60px] pr-[50px] mt-12">
            {children}
          </div>
        </div>
      ) : (
        redirect("/login")
      )}
    </>
  );
}
