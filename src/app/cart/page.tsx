import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { authOptions } from "@/libs/authOptions";
import { getServerSession } from "next-auth";
import CartTable from "./components/CartTable";
import { getCartItem } from "../../actions/getCartItem";
import Link from "next/link";

export const dynamic = "force-dynamic";

const page = async () => {
  const session = await getServerSession(authOptions);
  const cartItem = await getCartItem((session as any)?.id);

  return (
    <>
      <Header />
      {!!cartItem?.length ? (
        <div className="grid md:grid-cols-5 lg:mt-36 mt-48 mb-20 sm:px-3 px-1 pb-10 m-auto max-w-[1080px] relative">
          <CartTable cartItem={cartItem} />
          <div className="md:col-span-2 px-2">
            <p className="text-lg border-b py-3">جمع کل سبد خرید</p>
            <div className="flex justify-between border-b py-2">
              <p>جمع جزء</p>
              <p>۳۰۵,۰۰۰ تومان</p>
            </div>
            <div className="flex justify-between border-b py-2">
              <p>مجموع</p>
              <p>۳۰۵,۰۰۰ تومان</p>
            </div>
            <Link href="/cart/order">
              <button className="bg-green min-w-full py-2 text-white mt-5">
                ادامه جهت تسویه حساب
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-60 text-center mb-56">
          <h1 className="sm:text-4xl text-2xl text-green">
            هیچ محصولی در سبد خرید وجود ندارد
          </h1>
          <div className="bg-green py-2 px-6 text-white mt-10 max-w-[10rem] m-auto">
            <Link href="/product">رفتن به فروشگاه</Link>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default page;
