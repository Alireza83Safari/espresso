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
      <div className="mx-4 overflow-x-auto md:mx-10">
        <table className="max-w-[86vw] overflow-auto rounded-xl bg-slate-100 shadow-lg">
          <thead>
            <tr className="grid-cols-6 border-b text-center text-xs sm:text-sm md:grid lg:text-base [&>th]:min-w-[5rem] [&>th]:py-4">
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
                  className="grid-cols-6 border-b text-center text-xs md:grid md:text-sm [&>td]:min-w-[5rem] [&>td]:py-4"
                  key={product?._id}
                >
                  <td>{index + 1}</td>
                  <td className="truncate text-ellipsis whitespace-nowrap">
                    {product?.name}
                  </td>
                  <td>{product?.price?.toLocaleString()}</td>
                  <td className="flex justify-center ">
                    <Image width={40} height={40} src={product?.image} alt="" />
                  </td>
                  <td>{product?.updatedAt?.slice(0, 10)}</td>
                  <td className="gap-x-3 flex items-center justify-center">
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
