"use client";
import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { ProductType } from "@/types/product";
import Image from "next/image";
import { apiUrl } from "@/services/apiUrl";
import { clientRevalidateTag } from "@/helper/clientRevalidateTag";
import toast from "react-hot-toast";

interface ProductsTableProps {
  products: ProductType[];
}

const ProductsTable: React.FC<ProductsTableProps> = ({ products }) => {
  const deleteProduct = async (id: string) => {
    const res = await fetch(`${apiUrl}/api/product/${id}`, {
      method: "DELETE",
    });

    if (res.status === 200) {
      toast.success("نظر با موفقیت حذف شد");
      clientRevalidateTag("products");
    }
  };
  return (
    <div className="overflow-x-auto md:mx-10 mx-4">
      <table className="max-w-[86vw] shadow-lg rounded-xl bg-slate-50 overflow-auto">
        <thead>
          <tr className="text-sm text-center border-b md:grid grid-cols-6 py-4">
            <th className="min-w-[3rem] md:py-0 py-4">#</th>
            <th className="min-w-[6rem]">نام</th>
            <th className="min-w-[6rem]">قیمت</th>
            <th className="min-w-[6rem]">عکس</th>
            <th className="min-w-[6rem]">تاریخ</th>
            <th className="min-w-[6rem]">#</th>
          </tr>
        </thead>

        <tbody>
          {!!products?.length ? (
            products?.map((product, index) => (
              <tr
                className="sm:text-sm text-xs 2xl:py-4 py-3 text-[10px] text-center md:grid grid-cols-6 px-2"
                key={product?._id}
              >
                <td className="min-w-[3rem] md:py-0 py-4">{index + 1}</td>
                <td className=" whitespace-nowrap truncate text-ellipsis min-w-[6rem]">
                  {product?.name}
                </td>
                <td className="min-w-[6rem]">
                  {product?.price?.toLocaleString()}
                </td>
                <td className="flex justify-center min-w-[6rem]">
                  <Image width={40} height={40} src={product?.image} alt="" />
                </td>
                <td className="min-w-[6rem]">
                  {product?.updatedAt?.slice(0, 10)}
                </td>
                <td className="flex justify-center items-center gap-x-3 min-w-[6rem]">
                  <FaTrashAlt
                    className="text-red-500 cursor-pointer"
                    onClick={() => deleteProduct(product?._id)}
                  />
                  <FaEdit className="text-orange-600 cursor-pointer" />
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

export default ProductsTable;
