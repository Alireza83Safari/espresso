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
    <div className="mb-10 grid xs:grid-cols-2 gap-8 lg:grid-cols-3">
      <div className="rounded-xl bg-slate-100 py-8 text-center shadow-xl">
        <h2 className="text-xl lg:text-2xl">مجموع سفارشات</h2>
        <p className="pt-4 text-3xl font-black text-indigo-600 lg:text-4xl">
          {orders?.length}
        </p>
      </div>
      <div className="rounded-xl bg-slate-100 py-8 text-center shadow-xl">
        <h2 className="text-xl lg:text-2xl">مجموع ارزش</h2>
        <p className="pt-4 text-3xl font-black text-indigo-600 lg:text-4xl">
          {totalOrdersPrice?.toLocaleString()}
        </p>
      </div>
      <div className="rounded-xl bg-slate-100 py-8 text-center shadow-xl">
        <h2 className="text-xl lg:text-2xl">مجموع مالیات</h2>
        <p className="pt-4 text-3xl font-black text-indigo-600 lg:text-4xl">
          {Math.floor(totalOrdersPrice / 9)?.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default OrderOptions;
