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
    <div className="md:col-span-3 min-w-full sm:text-base text-sm px-1">
      <div className="grid grid-cols-5">
        <div className="col-span-2">محصول</div>
        <div className="col-span-1">عکس</div>
        <div className="col-span-1">قیمت</div>
        <div className="col-span-1">حذف</div>
      </div>

      {!!cartItem?.length &&
        cartItem?.map((cart: any) => (
          <div className="grid grid-cols-5 my-3 sm:text-sm text-xs border-b">
            <div className="flex items-center col-span-2">
              {cart?.product?.name}
            </div>
            <div className="col-span-1">
              <Image src={cart?.product?.image} width={70} height={70} alt="" />
            </div>
            <div className="flex items-center col-span-1">
              {cart?.product?.price}
            </div>
            <div className="flex items-center col-span-1">
              <FaX
                className="text-red-500 text-xl cursor-pointer"
                onClick={() => deleteCartItem(cart?._id)}
              />
            </div>
          </div>
        ))}
    </div>
  );
}
