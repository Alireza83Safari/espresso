"use client";
import { usePathname } from "next/navigation";

export default function SubHeader() {
  const pathname = usePathname();
  return (
    <div className=" absolute top-[91px] right-0 left-0 min-w-full py-5 bg-[#F7F7F7] border-y">
      <div className="max-w-[1080px] mx-auto container">
        <h1 className="text-2xl font-bold">حساب کاربری من</h1>
        <p className="mt-2">پیشخوان</p>
      </div>
    </div>
  );
}
