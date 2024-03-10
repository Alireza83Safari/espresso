import React from "react";
import { OrderType } from "@/types/order";

interface OrderOptionsProps {
  orders: OrderType[];
}

const OrderOptions: React.FC<OrderOptionsProps> = ({ orders }) => {
  const totalOrdersPrice = orders?.reduce((total, order) => {
    return total + order?.totalPrice;
  }, 0);

  return (
    <div className="mx-4 mb-10 md:mx-10 md:grid md:grid-cols-3 md:gap-x-10">
      <div className="rounded-xl bg-slate-50 py-8 text-center shadow-xl">
        <h2 className="text-xl md:text-2xl">مجموع سفارشات</h2>
        <p className="pt-4 text-3xl font-black text-indigo-600 md:text-4xl">
          {orders?.length}
        </p>
      </div>
      <div className="mt-5 rounded-xl bg-slate-50 py-8 text-center shadow-xl md:mt-0">
        <h2 className="text-xl md:text-2xl">مجموع ارزش</h2>
        <p className="pt-4 text-3xl font-black text-indigo-600 md:text-4xl">
          {totalOrdersPrice?.toLocaleString()}
        </p>
      </div>
      <div className="mt-5 rounded-xl bg-slate-50 py-8 text-center shadow-xl md:mt-0">
        <h2 className="text-xl md:text-2xl">مجموع مالیات</h2>
        <p className="pt-4 text-3xl font-black text-indigo-600 md:text-4xl">
          {Math.floor(totalOrdersPrice / 9)?.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default OrderOptions;
