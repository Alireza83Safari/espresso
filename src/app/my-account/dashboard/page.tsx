import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/authOptions";
import Link from "next/link";

const page = () => {
  const session = getServerSession(authOptions);
  return (
    <div className="flex justify-center px-2">
      <div className="max-w-[580px]">
        <h3>سلام {(session as any)?.username} </h3>
        <p>
          از طریق پیشخوان حساب کاربری‌تان، می‌توانید
          <b>
            <Link href="/my-account/orders">سفارش‌های اخیرتان </Link>
          </b>
          را مشاهده، آدرس‌های حمل و نقل و صورتحساب‌تان را مدیریت و جزییات حساب
          کاربری و کلمه عبور خود را ویرایش کنید.
        </p>

        <div className="mt-5 grid gap-y-5 xs:grid-cols-3">
          <div className="flex items-center justify-center border p-4 text-xl hover:bg-gray-50 xs:w-[150px]">
            <Link href="/my-account/orders">سفارش ها</Link>
          </div>
          <div className="flex items-center justify-center border p-4 text-xl hover:bg-gray-50 xs:w-[150px]">
            <Link href="/my-account/address">آدرس</Link>
          </div>
          <div className="flex items-center justify-center border p-4 text-xl hover:bg-gray-50 xs:w-[150px]">
            <Link href="/my-account/comments">نظرات</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
