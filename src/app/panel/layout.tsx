import React from "react";
import Sidebar from "./components/Sidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <Sidebar />
      <div className="lg:pr-[130px] md:pr-[110px] xs:pr-[60px] pr-[50px] mt-12">
        {children}
      </div>
    </div>
  );
}
