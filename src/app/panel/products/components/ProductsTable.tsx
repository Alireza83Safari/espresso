"use client";
import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { ProductType } from "@/types/product";
import Image from "next/image";
import { apiUrl } from "@/services/apiUrl";
import { clientRevalidateTag } from "@/helper/clientRevalidateTag";
import toast from "react-hot-toast";
import EditProductModal from "./EditProductModal";

interface ProductsTableProps {
  products: ProductType[];
}

const ProductsTable: React.FC<ProductsTableProps> = ({ products }) => {
  const [editProductId, setEditProductId] = useState("");
  const [isOpenEditModal, setOpenEditModal] = useState(false);

  const deleteProduct = async (id: string) => {
    const res = await fetch(`/api/product/${id}`, {
      method: "DELETE",
    });
    console.log(res);

    if (res.status === 200) {
      toast.success("نظر با موفقیت حذف شد");
      clientRevalidateTag("products");
    }
  };
  return (
    <>
      <div className="overflow-x-auto">
        <table className="max-w-[86vw] overflow-auto rounded-xl bg-slate-100 shadow-lg">
          <thead>
            <tr className="grid-cols-6 border-b py-4 text-center text-xs sm:text-sm md:grid lg:text-base [&>th]:min-w-[5rem]">
              <th className="py-4 md:py-0">#</th>
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
                  className="grid-cols-6 px-2 py-3 text-center text-[10px] text-xs sm:text-sm md:grid lg:text-base 2xl:py-4 [&>td]:min-w-[5rem] [&>td]:min-h-[3rem]"
                  key={product?._id}
                >
                  <td className="py-4 md:py-0">{index + 1}</td>
                  <td className="truncate text-ellipsis whitespace-nowrap">
                    {product?.name}
                  </td>
                  <td>{product?.price?.toLocaleString()}</td>
                  <td className="flex justify-center ">
                    <Image width={40} height={40} src={product?.image} alt="" />
                  </td>
                  <td>{product?.updatedAt?.slice(0, 10)}</td>
                  <td className="flex items-center justify-center gap-x-3 ">
                    <FaTrashAlt
                      className="cursor-pointer text-red-500"
                      onClick={() => deleteProduct(product?._id)}
                    />
                    <FaEdit
                      className="cursor-pointer text-orange-600"
                      onClick={() => {
                        setEditProductId(product?._id);
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

export default ProductsTable;
