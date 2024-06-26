"use client";
import React from "react";
import { clientRevalidateTag } from "@/helper/clientRevalidateTag";
import { DiscountType } from "@/types/discount";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";

type DiscountTableProps = {
  discounts: DiscountType[];
};

const DiscountTable: React.FC<DiscountTableProps> = ({ discounts }) => {
  const deleteDiscount = async (id: string) => {
    const res = await fetch(`/api/discount/${id}`, {
      method: "DELETE",
    });

    if (res.status === 200) {
      toast.success("تخفیف با موفقیت حذف شد");
      clientRevalidateTag("discounts");
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full rounded-xl bg-slate-100 shadow-xl">
        <thead>
          <tr className="h-[3rem] grid-cols-8 border-b border-slate-300 text-center text-xs xs:grid md:text-sm [&>th]:min-w-[5rem] [&>th]:py-3">
            <th>ردیف</th>
            <th>کد</th>
            <th>تعداد</th>
            <th>مصرف شده</th>
            <th>تخفیف</th>
            <th>سازنده</th>
            <th>تاریخ</th>
            <th>#</th>
          </tr>
        </thead>

        <tbody>
          {!!discounts?.length ? (
            discounts?.map((discount, index) => (
              <tr
                className="grid-cols-8 py-4 text-center text-xs xs:grid md:text-sm 2xl:py-4 2xl:text-base [&>td]:min-w-[5rem] [&>td]:py-3"
                key={discount?._id}
              >
                <td>{index + 1}</td>
                <td>{discount?.code}</td>
                <td>{discount?.count}</td>
                <td>{discount?.use}</td>
                <td>{discount?.percent}</td>
                <td>{discount?.user?.username}</td>
                <td>{discount?.createdAt?.slice(0, 10)}</td>
                <td className="flex items-center justify-center gap-x-3 ">
                  <FaTrashAlt
                    className="cursor-pointer text-red-500"
                    onClick={() => deleteDiscount(discount?._id)}
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

export default DiscountTable;
