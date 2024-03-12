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
    <div className="rounded-md border p-4 md:col-span-2">
      <p className="border-b pb-3 text-lg">جمع کل سبد خرید</p>
      <div className="flex justify-between border-b py-2">
        <p>جمع جزء</p>
        <p>{totalPrice?.toLocaleString()} تومان</p>
      </div>
      <div className="flex justify-between border-b py-2">
        <p>مجموع</p>
        <p>{totalPrice?.toLocaleString()} تومان</p>
      </div>
      {/*      <div className="relative mt-4">
          <input
            type="text"
            placeholder="کد تخفیف"
            className="min-w-full rounded-md border px-2 py-1"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button>
            <FaPlus
              className=" absolute left-2 top-2 text-lg"
              onClick={validateCoupon}
            />
          </button>
        </div> */}
      <Link href="/cart/order">
        <button className="mt-5 min-w-full rounded-md bg-green py-2 text-white">
          ادامه جهت تسویه حساب
        </button>
      </Link>
    </div>
  );
};

export default CartDetails;
