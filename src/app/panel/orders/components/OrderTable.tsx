"use client";
import React from "react";
import { OrderType } from "@/types/order";
import { FaTrashAlt } from "react-icons/fa";
import { apiUrl } from "@/services/apiUrl";
import { clientRevalidateTag } from "@/helper/clientRevalidateTag";
import toast from "react-hot-toast";

interface OrdersTableProps {
  orders: OrderType[];
}

const OrderTable: React.FC<OrdersTableProps> = ({ orders }) => {
  const deleteOrder = async (id: string) => {
    const res = await fetch(`${apiUrl}/api/order/${id}`, {
      method: "DELETE",
    });

    if (res.status === 200) {
      toast.success("سفارش با موفقیت حذف شد");
      clientRevalidateTag("products");
    }
  };
  return (
    <div className="mx-4 overflow-x-auto md:mx-10">
      <table className="min-w-full rounded-xl bg-slate-50 shadow-xl">
        <thead>
          <tr className="grid-cols-5 border-b py-4 text-center text-xs xs:grid md:text-sm 2xl:py-4">
            <th className="min-w-[3rem] py-4 xs:py-0">ردیف</th>
            <th className="min-w-[5rem]">مبلغ</th>
            <th className="min-w-[7rem]">کاربر</th>
            <th className="min-w-[6rem]">تاریخ</th>
            <th className="min-w-[6rem]">#</th>
          </tr>
        </thead>

        <tbody>
          {!!orders?.length ? (
            orders?.map((order, index) => (
              <tr
                className="grid-cols-5 py-4 text-center text-xs xs:grid md:text-sm 2xl:py-4 2xl:text-base"
                key={order?._id}
              >
                <td className="min-w-[3rem] py-4 xs:py-0">{index + 1}</td>
                <td className="min-w-[5rem]">{order?.totalPrice}</td>
                <td className="min-w-[7rem]">{order?.user?.username}</td>
                <td className="min-w-[6rem]">
                  {order?.createdAt?.slice(0, 10)}
                </td>
                <td className="flex items-center justify-center gap-x-3 ">
                  <FaTrashAlt
                    className="cursor-pointer text-red-500"
                    onClick={() => deleteOrder(order?._id)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>
                <div className="mt-32 flex items-center justify-center text-xl">
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
