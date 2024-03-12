"use client";
import React, { useEffect, useState } from "react";
import { CartType } from "@/types/cart";
import { FaPlus } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { clientRevalidateTag } from "@/helper/clientRevalidateTag";
import toast from "react-hot-toast";
import { apiUrl } from "@/services/apiUrl";
import useDiscountCalculator from "@/hooks/useDiscountCalculator";
import { FaX } from "react-icons/fa6";

type OrdertDetailsProps = {
  cart: CartType[];
  chooseAddress: string;
};

const OrderDetails: React.FC<OrdertDetailsProps> = ({
  cart,
  chooseAddress,
}) => {
  const [coupon, setCoupon] = useState(0);
  const [code, setCode] = useState("");
  const { data: session } = useSession();
  const { push } = useRouter();
  const [cartItem, setCartItem] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const initialData = {
    discountPercent: !!coupon ? coupon : 0,
    totalPrice: totalPrice,
  };

  const validateCode = async () => {
    setCode("");
    if (code.length) {
      const res = await fetch(`${apiUrl}/api/discount/use`, {
        method: "PUT",
        body: JSON.stringify({ code }),
      });
      const data = await res.json();

      if (res.status === 200) {
        setCoupon(data?.percent);
        clientRevalidateTag("discounts");
      } else if (res.status !== 200) {
        toast.error(data?.message);
      }
    }
  };

  const createOrder = async () => {
    try {
      const orderItem = {
        user: (session as any)?.id,
        address: chooseAddress,
        products: cartItem,
        totalPrice: totalPrice,
      };

      const orderRes = await fetch(`/api/order`, {
        method: "POST",
        body: JSON.stringify(orderItem),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (orderRes.status === 200) {
        toast.success("ثبت سفارش موفقیت آمیز بود");

        localStorage.removeItem("cart");
        clientRevalidateTag("order");
        push("/home");
      }
    } catch (error) {}
  };

  const { discountedPrice, updateDiscountData } =
    useDiscountCalculator(initialData);

  const handleUpdateDiscount = () => {
    updateDiscountData({
      discountPercent: !!coupon ? coupon : 0,
      totalPrice: totalPrice,
    });
  };

  useEffect(() => {
    handleUpdateDiscount();
  }, [coupon]);

  useEffect(() => {
    if (cart) {
      const productIds = cart?.reduce((prev: string[], next: any) => {
        if (next.product && next._id) {
          prev.push(next._id);
        }
        return prev;
      }, []);

      setCartItem(productIds);
    }

    const calculatedTotalPrice: number = cart?.reduce(
      (acc: number, cart: any) => acc + cart?.price,
      0,
    );
    setTotalPrice(calculatedTotalPrice);
  }, [cart]);

  return (
    <div
      className={` h-auto rounded-md border p-4 ${!coupon ? " max-h-[20rem]" : "max-h-[22.2rem]"}`}
    >
      <p className="pb-4 text-center text-lg">جمع کل سبد خرید</p>
      <div className="flex justify-between py-3 text-sm">
        <p>تعداد کالاها</p>
        <p>{cart?.length}</p>
      </div>
      <div className="flex justify-between py-3 text-sm">
        <p>مجموع</p>
        <p className={discountedPrice ? " text-gray-500 line-through" : ""}>
          {totalPrice?.toLocaleString()} تومان
        </p>
      </div>
      {!!discountedPrice && (
        <div className="flex justify-between py-3 text-sm">
          <p>مجموع با تخفیف</p>
          <p>
            {discountedPrice
              ? discountedPrice?.toLocaleString()
              : totalPrice?.toLocaleString()}
            تومان
          </p>
        </div>
      )}

      <div>
        {!!coupon && (
          <div className="flex items-center justify-between rounded-lg border bg-lime-100 px-2 py-1">
            <FaX
              className="cursor-pointer text-sm text-red-500"
              onClick={() => setCoupon(0)}
            />
            {coupon}%
          </div>
        )}
      </div>
      <div className="relative mt-4">
        <input
          type="text"
          placeholder="کد تخفیف"
          className="min-w-full rounded-md border px-2 py-1"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button>
          <FaPlus
            className=" absolute left-2 top-2 text-lg"
            onClick={validateCode}
          />
        </button>
      </div>
      <button
        className="mt-5 min-w-full rounded-md bg-green py-2 text-white disabled:bg-gray-100 disabled:text-gray-400"
        disabled={!chooseAddress?.length}
        onClick={createOrder}
      >
        تایید و تکمیل سفارش
      </button>
    </div>
  );
};

export default OrderDetails;
