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
    <div className="md:grid md:grid-cols-3 md:mx-10 mx-4 mb-10 md:gap-x-10">
      <div className="text-center shadow-xl bg-slate-50 py-8 rounded-xl">
        <h2 className="md:text-2xl text-xl">مجموع سفارشات</h2>
        <p className="pt-4 md:text-4xl text-3xl font-black text-indigo-600">
          {orders?.length}
        </p>
      </div>
      <div className="text-center shadow-xl bg-slate-50 py-8 rounded-xl md:mt-0 mt-5">
        <h2 className="md:text-2xl text-xl">مجموع ارزش</h2>
        <p className="pt-4 md:text-4xl text-3xl font-black text-indigo-600">
          {totalOrdersPrice?.toLocaleString()}
        </p>
      </div>
      <div className="text-center shadow-xl bg-slate-50 py-8 rounded-xl md:mt-0 mt-5">
        <h2 className="md:text-2xl text-xl">مجموع مالیات</h2>
        <p className="pt-4 md:text-4xl text-3xl font-black text-indigo-600">
          {Math.floor(totalOrdersPrice / 9)?.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default OrderOptions;
