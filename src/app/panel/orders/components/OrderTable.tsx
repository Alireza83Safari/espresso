import React from "react";
import { OrderType } from "@/types/order";

interface OrdersTableProps {
  orders: OrderType[];
}

const OrderTable: React.FC<OrdersTableProps> = ({ orders }) => {
  return (
    <div className="overflow-x-auto md:mx-10 mx-4">
      <table className="min-w-full shadow-xl rounded-xl bg-slate-50">
        <thead>
          <tr className="md:text-sm text-xs text-center border-b grid grid-cols-4 2xl:py-4 py-4">
            <th>#</th>
            <th>مبلغ</th>
            <th>کاربر</th>
            <th>تاریخ</th>
          </tr>
        </thead>

        <tbody>
          {!!orders?.length ? (
            orders?.map((order, index) => (
              <tr
                className="2xl:text-base md:text-sm text-xs text-center grid grid-cols-4 2xl:py-4 py-4"
                key={order?._id}
              >
                <td >{index + 1}</td>
                <td className="mx-2">{order?.totalPrice}</td>
                <td className="mx-2">{order?.user?.username}</td>
                <td className="mx-2">{order?.createdAt?.slice(0, 10)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>
                <div className="flex justify-center items-center mt-32 text-xl">
                  سفارشی یافت نشد
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
