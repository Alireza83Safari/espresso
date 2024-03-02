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
      clientRevalidateTag("product");
    }
  };
  return (
    <table className="max-w-[86vw] shadow-lg rounded-xl bg-slate-50 sm:mx-10 mx-2 overflow-auto">
      <thead>
        <tr className="md:text-sm sm:text-xs text-[10px] text-center border-b grid sm:grid-cols-6 grid-cols-5 py-4">
          <th className="sm:inline hidden">#</th>
          <th>نام</th>
          <th>قیمت</th>
          <th>عکس</th>
          <th>تاریخ</th>
          <th>#</th>
        </tr>
      </thead>

      <tbody>
        {!!products?.length ? (
          products?.map((product, index) => (
            <tr
              className="2xl:text-base md:text-sm sm:text-xs 2xl:py-4 py-3 text-[10px] text-center grid sm:grid-cols-6 grid-cols-5 px-2"
              key={product?._id}
            >
              <td className="sm:inline hidden">{index + 1}</td>
              <td className=" whitespace-nowrap truncate text-ellipsis">
                {product?.name}
              </td>
              <td>{product?.price}</td>
              <td className="flex justify-center">
                <Image width={40} height={40} src={product?.image} alt="" />
              </td>
              <td>{product?.updatedAt?.slice(0, 10)}</td>
              <td className="flex justify-center gap-x-3">
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
  );
};

export default ProductsTable;
