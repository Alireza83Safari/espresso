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
      0
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
    <section className="grid lg:grid-cols-2 grid-cols-1 lg:mt-36 mt-44 mb-20 m-auto max-w-[1080px] px-2">
      <div className="sm:text-base text-sm">
        <div className="grid grid-cols-4">
          <div className="col-span-2">محصول</div>
          <div className="col-span-1">عکس</div>
          <div className="col-span-1">قیمت</div>
        </div>

        {!!cartItem?.length &&
          cartItem?.map((cart: any) => (
            <div className="grid grid-cols-4 my-3 sm:text-sm text-xs border-b">
              <div className="flex items-center col-span-2">
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
              <div className="flex items-center col-span-1">
                {cart?.product?.price}
              </div>
            </div>
          ))}
      </div>

      <div className="mb-10">
        {!!address?.length ? (
          address?.map((item: AddressType) => (
            <div
              className={`grid grid-cols-2 border p-2 gap-y-5 relative mb-7 rounded-lg sm:text-base text-sm sm:mx-4 bg-gray-50 sm:mt-0 mt-5 hover:bg-white duration-300 ${
                chooseAddress === item?._id && "border-2 border-green"
              }`}
              onClick={() => setChooseAddress(item?._id)}
            >
              <button onClick={() => deleteAddress(item?._id)}>
                <FaX className="text-red-500 absolute left-1 top-1" />
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
              <div className="flex col-span-2">
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
        className="bg-green min-w-full py-2 rounded-lg text-white disabled:bg-gray-300"
        disabled={!chooseAddress?.length}
        onClick={createOrder}
      >
        ثبت سفارش
      </button>
    </section>
  );
};

export default OrderPage;
