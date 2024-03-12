"use client";
import Image from "next/image";
import { FaX } from "react-icons/fa6";
import { deleteCart } from "../../../actions/deleteCart";

export default function CartTable({ cartItem, getCart }: any) {
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
          <div className="my-3 grid grid-cols-5 border-b text-xs sm:text-sm" key={cart?._id}>
            <div className="col-span-2 flex items-center">{cart?.name}</div>
            <div className="col-span-1">
              <Image src={cart?.image} width={70} height={70} alt="" />
            </div>
            <div className="col-span-1 flex items-center">{cart?.price?.toLocaleString()}</div>
            <div className="col-span-1 flex items-center">
              <FaX
                className="cursor-pointer text-xl text-red-500"
                onClick={() => deleteCart(cart?._id, getCart)}
              />
            </div>
          </div>
        ))}
    </div>
  );
}
