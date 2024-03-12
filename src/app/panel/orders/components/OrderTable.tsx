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
      <table className="min-w-full rounded-xl bg-slate-100 shadow-xl">
        <thead>
          <tr className="grid-cols-5 border-b text-center text-xs xs:grid md:text-sm [&>th]:min-w-[5rem] [&>th]:py-4">
            <th>ردیف</th>
            <th>مبلغ</th>
            <th>کاربر</th>
            <th>تاریخ</th>
            <th>#</th>
          </tr>
        </thead>

        <tbody>
          {!!orders?.length ? (
            orders?.map((order, index) => (
              <tr
                className="grid-cols-5 text-center text-xs xs:grid md:text-sm 2xl:text-base [&>td]:min-w-[5rem] [&>td]:py-4 border-b"
                key={order?._id}
              >
                <td>{index + 1}</td>
                <td>{order?.totalPrice}</td>
                <td>{order?.user?.username}</td>
                <td>{order?.createdAt?.slice(0, 10)}</td>
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
