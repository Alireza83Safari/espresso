import { authOptions } from "@/libs/authOptions";
import { getServerSession } from "next-auth";
import CartTable from "./components/CartTable";
import { getCartItem } from "../../actions/getCartItem";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

const page = async () => {
  const session = await getServerSession(authOptions);
  const cartItem = await getCartItem((session as any)?.id);

  return (
    <>
      <Header />

      <section>
        {!!cartItem?.length ? (
          <div className="relative m-auto mb-20 mt-48 grid max-w-[1080px] px-1 pb-10 sm:px-3 md:grid-cols-5 lg:mt-36">
            <CartTable cartItem={cartItem} />
            <div className="px-2 md:col-span-2">
              <p className="border-b py-3 text-lg">جمع کل سبد خرید</p>
              <div className="flex justify-between border-b py-2">
                <p>جمع جزء</p>
                <p>۳۰۵,۰۰۰ تومان</p>
              </div>
              <div className="flex justify-between border-b py-2">
                <p>مجموع</p>
                <p>۳۰۵,۰۰۰ تومان</p>
              </div>
              <Link href="/cart/order">
                <button className="mt-5 min-w-full bg-green py-2 text-white">
                  ادامه جهت تسویه حساب
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="mb-56 mt-60 text-center">
            <h1 className="text-2xl text-green sm:text-4xl">
              هیچ محصولی در سبد خرید وجود ندارد
            </h1>
            <div className="m-auto mt-10 max-w-[10rem] bg-green px-6 py-2 text-white">
              <Link href="/product">رفتن به فروشگاه</Link>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default page;
