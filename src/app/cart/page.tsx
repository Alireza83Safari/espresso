"use client";
import CartTable from "./components/CartTable";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDetails from "./components/CartDetails";
import getCartItem from "@/actions/getCartItem";
import { LoadingTemplate } from "@/components";

const page = () => {
  const { cart, getCart, isLoading } = getCartItem();

  return (
    <>
      <Header />

      <section>
        {isLoading ? (
          <LoadingTemplate />
        ) : (
          <>
            {!!cart?.length ? (
              <div className="relative m-auto mb-20 mt-48 grid max-w-[1080px] px-1 pb-10 sm:px-3 md:grid-cols-5 lg:mt-36">
                <CartTable cartItem={cart} getCart={getCart} />
                <CartDetails cart={cart} />
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
          </>
        )}
      </section>

      <Footer />
    </>
  );
};

export default page;
