"use client";
import React, { useEffect, useState } from "react";
import { CartType } from "@/types/cart";
import Link from "next/link";

type CartDetailsProps = {
  cart: CartType[];
};

const CartDetails: React.FC<CartDetailsProps> = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculatedTotalPrice: number = cart?.reduce(
      (acc: number, cart: any) => acc + cart?.price,
      0,
    );
    setTotalPrice(calculatedTotalPrice);
  }, [cart]);

  return (
    <div className="rounded-md border p-4 md:col-span-2 mx-3">
      <p className="pb-4 text-center text-lg">جمع کل سبد خرید</p>
      <div className="flex justify-between py-3 text-sm">
        <p>تعداد کالاها</p>
        <p>{cart?.length}</p>
      </div>
      <div className="flex justify-between py-3 text-sm">
        <p>مجموع</p>
        <p>{totalPrice?.toLocaleString()} تومان</p>
      </div>

      <Link href="/cart/order">
        <button className="mt-5 min-w-full rounded-md bg-green py-2 text-white">
          تایید و تکمیل سفارش
        </button>
      </Link>
    </div>
  );
};

export default CartDetails;
