import { CartType } from "@/types/cart";
import Image from "next/image";
import React from "react";

type OrderProductsProps = {
  cart: CartType[];
};

const OrderProducts: React.FC<OrderProductsProps> = ({ cart }) => {
  return (
    <section className="col-span-3 rounded-lg border sm:ml-3">
      <div className="px-4 text-sm sm:text-base">
        <div className="grid grid-cols-3 border-b py-4">
          <div>محصول</div>
          <div>عکس</div>
          <div>قیمت</div>
        </div>

        {!!cart?.length &&
          cart?.map((cart) => (
            <div className="my-4 grid grid-cols-3 text-xs sm:text-sm">
              <div className="flex items-center">{cart?.name}</div>
              <div>
                <Image src={cart?.image} width={70} height={70} alt="" />
              </div>
              <div className="flex items-center">
                {cart?.price?.toLocaleString()}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default OrderProducts;
