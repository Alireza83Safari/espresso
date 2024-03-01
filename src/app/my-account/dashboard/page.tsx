import Sidebar from "../components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/authOptions";
import Link from "next/link";
import SubHeader from "../components/SubHeader";
import { withAuth } from "@/HOCs/withAuth";

const page = () => {
  const session = getServerSession(authOptions);
  return (
    <>
      <Header />
      <div className="max-w-[1080px] mx-auto container mb-32 mt-60 grid grid-cols-5">
        <Sidebar />
        <SubHeader />

        <div className="col-span-4 flex justify-end">
          <div className="max-w-[580px]">
            <h3>سلام {(session as any)?.username} </h3>
            <p>
              از طریق پیشخوان حساب کاربری‌تان، می‌توانید
              <b>
                <Link href="/my-account/orders">سفارش‌های اخیرتان</Link>
              </b>
              را مشاهده، آدرس‌های حمل و نقل و صورتحساب‌تان را مدیریت و جزییات
              حساب کاربری و کلمه عبور خود را ویرایش کنید.
            </p>

            <div className="grid grid-cols-3 gap-y-5 mt-5">
              <div className="w-[150px] border text-xl p-4 hover:bg-gray-50 flex justify-center items-center">
                <Link href="/my-account/orders">سفارش ها</Link>
              </div>
              <div className="w-[150px] border text-xl p-4 hover:bg-gray-50 flex justify-center items-center">
                <Link href="/my-account/address">آدرس</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default withAuth(page);
