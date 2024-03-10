"use client";
import { clientRevalidateTag } from "@/helper/clientRevalidateTag";
import { apiUrl } from "@/services/apiUrl";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import { FaX } from "react-icons/fa6";

export default function CartTable({ cartItem }: any) {
  const deleteCartItem = async (userId: string) => {
    const res = await fetch(`${apiUrl}/api/cart/${userId}`, {
      cache: "no-store",
      method: "DELETE",
    });
    if (res.status === 200) {
      clientRevalidateTag("product");
      toast.success("حذف با موفقیت انجام شد");
    }
  };

  return (
    <div className="min-w-full px-1 text-sm sm:text-base md:col-span-3">
      <div className="grid grid-cols-5">
        <div className="col-span-2">محصول</div>
        <div className="col-span-1">عکس</div>
        <div className="col-span-1">قیمت</div>
        <div className="col-span-1">حذف</div>
      </div>

      {!!cartItem?.length &&
        cartItem?.map((cart: any) => (
          <div className="my-3 grid grid-cols-5 border-b text-xs sm:text-sm">
            <div className="col-span-2 flex items-center">
              {cart?.product?.name}
            </div>
            <div className="col-span-1">
              <Image src={cart?.product?.image} width={70} height={70} alt="" />
            </div>
            <div className="col-span-1 flex items-center">
              {cart?.product?.price}
            </div>
            <div className="col-span-1 flex items-center">
              <FaX
                className="cursor-pointer text-xl text-red-500"
                onClick={() => deleteCartItem(cart?._id)}
              />
            </div>
          </div>
        ))}
    </div>
  );
}
