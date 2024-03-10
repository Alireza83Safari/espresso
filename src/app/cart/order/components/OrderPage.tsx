"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AddressType } from "@/types/address";
import { apiUrl } from "@/services/apiUrl";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import CreateAddress from "@/app/my-account/address/components/CreateAddress";
import { FaX } from "react-icons/fa6";
import { deleteAddress } from "@/actions/deleteAddress";
import { clientRevalidateTag } from "@/helper/clientRevalidateTag";

interface OrderPageProps {
  cartItem: any;
  address: AddressType[];
  userId: string;
}

const OrderPage: React.FC<OrderPageProps> = ({ cartItem, address, userId }) => {
  const [chooseAddress, setChooseAddress] = useState("");
  const { push } = useRouter();
  const [item, setItem] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cartItem) {
      const productIds = cartItem?.reduce((prev: string[], next: any) => {
        if (next.product && next.product._id) {
          prev.push(next.product._id);
        }
        return prev;
      }, []);

      setItem(productIds);
    }

    // calculate products total price
    const calculatedTotalPrice: number = cartItem?.reduce(
      (acc: number, cart: any) => acc + cart?.product?.price,
      0,
    );
    setTotalPrice(calculatedTotalPrice);
    setTotalPrice(calculatedTotalPrice);
  }, [cartItem]);

  const createOrder = async () => {
    try {
      const orderItem = {
        user: userId,
        address: chooseAddress,
        products: item,
        totalPrice: totalPrice,
      };

      const orderRes = await fetch(`${apiUrl}/api/order`, {
        method: "POST",
        body: JSON.stringify(orderItem),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (orderRes.status === 200) {
        toast.success("ثبت سفارش موفقیت آمیز بود");
        await fetch(`${apiUrl}/api/cart/clear-cart/${userId}`, {
          method: "DELETE",
        });
        clientRevalidateTag("order");
        push("/home");
      }
    } catch (error) {}
  };

  return (
    <section className="m-auto mb-20 mt-44 grid max-w-[1080px] grid-cols-1 px-2 lg:mt-36 lg:grid-cols-2">
      <div className="text-sm sm:text-base">
        <div className="grid grid-cols-4">
          <div className="col-span-2">محصول</div>
          <div className="col-span-1">عکس</div>
          <div className="col-span-1">قیمت</div>
        </div>

        {!!cartItem?.length &&
          cartItem?.map((cart: any) => (
            <div className="my-3 grid grid-cols-4 border-b text-xs sm:text-sm">
              <div className="col-span-2 flex items-center">
                {cart?.product?.name}
              </div>
              <div className="col-span-1">
                <Image
                  src={cart?.product?.image}
                  width={70}
                  height={70}
                  alt=""
                />
              </div>
              <div className="col-span-1 flex items-center">
                {cart?.product?.price}
              </div>
            </div>
          ))}
      </div>

      <div className="mb-10">
        {!!address?.length ? (
          address?.map((item: AddressType) => (
            <div
              className={`relative mb-7 mt-5 grid grid-cols-2 gap-y-5 rounded-lg border bg-gray-50 p-2 text-sm duration-300 hover:bg-white sm:mx-4 sm:mt-0 sm:text-base ${
                chooseAddress === item?._id && "border-2 border-green"
              }`}
              onClick={() => setChooseAddress(item?._id)}
            >
              <button onClick={() => deleteAddress(item?._id)}>
                <FaX className="absolute left-1 top-1 text-red-500" />
              </button>
              <div className="flex">
                <p className="ml-2 text-textGray">نام:</p>
                <p>{item?.firstname}</p>
              </div>
              <div className="flex">
                <p className="ml-2 text-textGray">نام خانوادگی:</p>
                <p>{item?.lastname}</p>
              </div>
              <div className="flex">
                <p className="ml-2 text-textGray">پلاک:</p>
                <p>{item?.plaque}</p>
              </div>
              <div className="flex">
                <p className="ml-2 text-textGray">شهر:</p>
                <p>{item?.city}</p>
              </div>
              <div className="flex">
                <p className="ml-2 text-textGray">شماره:</p>
                <p>{item?.phone}</p>
              </div>
              <div className="col-span-2 flex">
                <p className="ml-2 text-textGray">آدرس:</p>
                <p>{item?.address}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="mt-12">
            <CreateAddress />
          </div>
        )}
      </div>

      <button
        className="min-w-full rounded-lg bg-green py-2 text-white disabled:bg-gray-300"
        disabled={!chooseAddress?.length}
        onClick={createOrder}
      >
        ثبت سفارش
      </button>
    </section>
  );
};

export default OrderPage;
