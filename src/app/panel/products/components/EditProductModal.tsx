"use client";
import React, { useEffect } from "react";
import Modal from "@/components/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "@/validator/client/product";
import toast from "react-hot-toast";
import { clientRevalidateTag } from "@/helper/clientRevalidateTag";
import { apiUrl } from "@/services/apiUrl";

type EditProductModalProps = {
  editId: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setEditId: React.Dispatch<React.SetStateAction<string>>;
};

const EditProductModal: React.FC<EditProductModalProps> = ({
  editId,
  setIsOpen,
  isOpen,
  setEditId,
}) => {
  const onClose = () => {
    setIsOpen(false);
  };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  });

  const onSubmit = async (data: any) => {
    const res = await fetch(`${apiUrl}/api/product/${editId}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });

    if (res.status === 200) {
      [
        "name",
        "seedType",
        "seed",
        "caffeine",
        "price",
        "image",
        "description",
      ].forEach((field) => setValue(field as any, ""));
      setEditId("");
      toast.success("ویرایش محصول موفقیت آمیز بود");
      clientRevalidateTag("products");
    }
  };

  const findEditProduct = async () => {
    try {
      const res = await fetch(`${apiUrl}/api/product/${editId}`);
      const data = await res.json();

      setValue("name", data.name);
      setValue("seedType", data.seedType);
      setValue("seed", data.seed);
      setValue("caffeine", data.caffeine);
      setValue("price", data.price);
      setValue("image", data.image);
      setValue("description", data.description);
    } catch (error) {
      console.error("Error fetching edit product:", error);
    }
  };

  useEffect(() => {
    if (editId) {
      findEditProduct();
    }
  }, [editId]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h1 className="mt-3 text-center text-2xl">ویراش محصول</h1>
      <form
        className="mx- my-8 gap-y-6 sm:mx-10 sm:grid sm:gap-x-3 md:grid-cols-2 lg:gap-x-7"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="block text-sm">نام</label>
          <input
            type="text"
            className="min-w-full rounded-md border px-2 py-1 outline-none focus:border-green"
            placeholder="نام"
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="mt-4 sm:mt-0">
          <label className="block text-sm">دانه</label>
          <input
            type="text"
            className="min-w-full rounded-md border px-2 py-1 outline-none focus:border-green"
            placeholder="دانه"
            {...register("seedType")}
          />
          {errors.seedType && (
            <p className="mt-1 text-sm text-red-500">
              {errors.seedType.message}
            </p>
          )}
        </div>

        <div className="mt-4 sm:mt-0">
          <label className="block text-sm">نوع دانه</label>
          <select
            className="min-w-full rounded-md border px-2 py-1 outline-none focus:border-green"
            {...register("seed")}
          >
            <option value="mix"></option>
            <option value="mix">میکس</option>
            <option value="pure">خالص</option>
            <option value="powdery">پودری</option>
          </select>
          {errors.seed && (
            <p className="mt-1 text-sm text-red-500">{errors.seed.message}</p>
          )}
        </div>

        <div className="mt-4 sm:mt-0">
          <label className="block text-sm">کافین</label>
          <input
            type="text"
            className="min-w-full rounded-md border px-2 py-1 outline-none focus:border-green"
            placeholder="کافین"
            {...register("caffeine")}
          />
          {errors.caffeine && (
            <p className="mt-1 text-sm text-red-500">
              {errors.caffeine.message}
            </p>
          )}
        </div>

        <div className="mt-4 sm:mt-0">
          <label className="block text-sm">قیمت</label>
          <input
            type="number"
            className="min-w-full rounded-md border px-2 py-1 outline-none focus:border-green"
            placeholder="قیمت"
            {...register("price")}
          />
          {errors.price && (
            <p className="mt-1 text-sm text-red-500">{errors.price.message}</p>
          )}
        </div>

        <div className="mt-4 sm:mt-0">
          <label className="block text-sm">عکس</label>
          <input
            type="text"
            className="min-w-full rounded-md border px-2 py-1 outline-none focus:border-green"
            placeholder="عکس"
            {...register("image")}
          />
          {errors.image && (
            <p className="mt-1 text-sm text-red-500">{errors.image.message}</p>
          )}
        </div>

        <div className="col-span-2 mt-4 sm:mt-0">
          <label className="block text-sm">توضیحات</label>
          <textarea
            className="min-h-[10rem] min-w-full rounded-md border px-2 py-1 outline-none focus:border-green"
            placeholder="توضیحات"
            {...register("description")}
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-500">
              {errors.description.message}
            </p>
          )}
        </div>

        <button
          className="col-span-2 min-w-full rounded-lg bg-green py-2 text-white"
          type="submit"
        >
          ویراش محصول
        </button>
      </form>
    </Modal>
  );
};

export default EditProductModal;
