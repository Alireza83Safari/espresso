"use client";
import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { CoffeeType } from "@/types/coffee";
import Image from "next/image";
import { clientRevalidateTag } from "@/helper/clientRevalidateTag";
import toast from "react-hot-toast";
import EditProductModal from "./EditProductModal";

interface CoffeeTableProps {
  coffees: CoffeeType[];
}

const CoffeeTable: React.FC<CoffeeTableProps> = ({ coffees }) => {
  const [editProductId, setEditProductId] = useState("");
  const [isOpenEditModal, setOpenEditModal] = useState(false);

  const deleteProduct = async (id: string) => {
    const res = await fetch(`/api/coffee/${id}`, {
      method: "DELETE",
    });

    if (res.status === 200) {
      toast.success("محصول با موفقیت حذف شد");
      clientRevalidateTag("coffees");
    }
  };
  return (
    <>
      <div className="overflow-x-auto">
        <table className="max-w-[86vw] overflow-auto rounded-xl bg-slate-100 shadow-lg">
          <thead>
            <tr className="grid-cols-6 border-b border-slate-300 py-4 text-center text-xs sm:text-sm md:grid lg:text-base [&>th]:min-w-[5rem]">
              <th>ردیف</th>
              <th>نام</th>
              <th>قیمت</th>
              <th>عکس</th>
              <th>تاریخ</th>
              <th>#</th>
            </tr>
          </thead>

          <tbody>
            {!!coffees?.length ? (
              coffees?.map((coffee, index) => (
                <tr
                  className="grid-cols-6 px-2 py-3 text-center text-xs sm:text-sm md:grid lg:text-base 2xl:py-4 [&>td]:min-h-[3rem] [&>td]:min-w-[5rem]"
                  key={coffee?._id}
                >
                  <td>{index + 1}</td>
                  <td className="truncate text-ellipsis whitespace-nowrap">
                    {coffee?.name}
                  </td>
                  <td>{coffee?.price?.toLocaleString()}</td>
                  <td className="flex justify-center ">
                    <Image width={40} height={40} src={coffee?.image} alt="" />
                  </td>
                  <td>{coffee?.updatedAt?.slice(0, 10)}</td>
                  <td className="flex items-center justify-center gap-x-3 ">
                    <FaTrashAlt
                      className="cursor-pointer text-red-500"
                      onClick={() => deleteProduct(coffee?._id)}
                    />
                    <FaEdit
                      className="cursor-pointer text-orange-600"
                      onClick={() => {
                        setEditProductId(coffee?._id);
                        setOpenEditModal(true);
                      }}
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

      <EditProductModal
        isOpen={isOpenEditModal}
        editId={editProductId}
        setIsOpen={setOpenEditModal}
        setEditId={setEditProductId}
      />
    </>
  );
};

export default CoffeeTable;
