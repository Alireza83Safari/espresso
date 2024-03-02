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
          <tr className="md:text-sm text-xs text-center border-b xs:grid grid-cols-4 2xl:py-4 py-4">
            <th className="min-w-[3rem] xs:py-0 py-4">#</th>
            <th className="min-w-[5rem]">مبلغ</th>
            <th className="min-w-[7rem]">کاربر</th>
            <th className="min-w-[6rem]">تاریخ</th>
          </tr>
        </thead>

        <tbody>
          {!!orders?.length ? (
            orders?.map((order, index) => (
              <tr
                className="2xl:text-base md:text-sm text-xs text-center xs:grid grid-cols-4 2xl:py-4 py-4"
                key={order?._id}
              >
                <td className="min-w-[3rem] xs:py-0 py-4">{index + 1}</td>
                <td className="min-w-[5rem]">{order?.totalPrice}</td>
                <td className="min-w-[7rem]">{order?.user?.username}</td>
                <td className="min-w-[6rem]">
                  {order?.createdAt?.slice(0, 10)}
                </td>
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
