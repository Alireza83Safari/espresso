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
      <h1 className="text-center text-2xl mt-3">ویراش محصول</h1>
      <form
        className="sm:grid md:grid-cols-2 lg:gap-x-7 sm:gap-x-3 gap-y-6 sm:mx-10 mx- my-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="block text-sm">نام</label>
          <input
            type="text"
            className="border min-w-full py-1 rounded-md outline-none focus:border-green px-2"
            placeholder="نام"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="sm:mt-0 mt-4">
          <label className="block text-sm">دانه</label>
          <input
            type="text"
            className="border min-w-full py-1 rounded-md outline-none focus:border-green px-2"
            placeholder="دانه"
            {...register("seedType")}
          />
          {errors.seedType && (
            <p className="text-red-500 text-sm mt-1">
              {errors.seedType.message}
            </p>
          )}
        </div>

        <div className="sm:mt-0 mt-4">
          <label className="block text-sm">نوع دانه</label>
          <select
            className="border min-w-full py-1 rounded-md outline-none focus:border-green px-2"
            {...register("seed")}
          >
            <option value="mix"></option>
            <option value="mix">میکس</option>
            <option value="pure">خالص</option>
            <option value="powdery">پودری</option>
          </select>
          {errors.seed && (
            <p className="text-red-500 text-sm mt-1">{errors.seed.message}</p>
          )}
        </div>

        <div className="sm:mt-0 mt-4">
          <label className="block text-sm">کافین</label>
          <input
            type="text"
            className="border min-w-full py-1 rounded-md outline-none focus:border-green px-2"
            placeholder="کافین"
            {...register("caffeine")}
          />
          {errors.caffeine && (
            <p className="text-red-500 text-sm mt-1">
              {errors.caffeine.message}
            </p>
          )}
        </div>

        <div className="sm:mt-0 mt-4">
          <label className="block text-sm">قیمت</label>
          <input
            type="number"
            className="border min-w-full py-1 rounded-md outline-none focus:border-green px-2"
            placeholder="قیمت"
            {...register("price")}
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>

        <div className="sm:mt-0 mt-4">
          <label className="block text-sm">عکس</label>
          <input
            type="text"
            className="border min-w-full py-1 rounded-md outline-none focus:border-green px-2"
            placeholder="عکس"
            {...register("image")}
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>

        <div className="col-span-2 sm:mt-0 mt-4">
          <label className="block text-sm">توضیحات</label>
          <textarea
            className="border min-w-full py-1 min-h-[10rem] rounded-md outline-none focus:border-green px-2"
            placeholder="توضیحات"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <button
          className="min-w-full bg-green py-2 rounded-lg text-white col-span-2"
          type="submit"
        >
          ویراش محصول
        </button>
      </form>
    </Modal>
  );
};

export default EditProductModal;
