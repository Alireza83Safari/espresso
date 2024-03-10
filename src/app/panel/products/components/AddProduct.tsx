"use client";
import { clientRevalidateTag } from "@/helper/clientRevalidateTag";
import { apiUrl } from "@/services/apiUrl";
import { productSchema } from "@/validator/client/product";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  });

  const onSubmit = async (data: any) => {
    const res = await fetch(`${apiUrl}/api/product`, {
      method: "POST",
      body: JSON.stringify({
        ...data,
        label:
          " قهوه اتیوپی, قهوه اسپیشیالیتی, قهوه تخصصی, قهوه تک خاستگاه, قهوه درکاپی, قهوه درکاپی اسپشیالیتی, قهوه های اسپشیالیتی, قهوه یرگاچف",
        weight: 1000,
        category: "65db38aa902679ef02d18d53",
      }),
    });
    if (res.status === 200) {
      setValue("name", "");
      setValue("seedType", "");
      setValue("seed", "");
      setValue("caffeine", "");
      setValue("price", 0);
      setValue("image", "");
      setValue("description", "");
      toast.success("ساخت محصول موفقیت آمیز بود");
      clientRevalidateTag("products");
    }
  };

  return (
    <form
      className="mx-2 mb-12 gap-y-6 rounded-lg bg-slate-50 p-2 shadow-lg sm:mx-10 sm:grid sm:gap-x-3 sm:p-4 md:grid-cols-2 lg:gap-x-7"
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
          <p className="mt-1 text-sm text-red-500">{errors.seedType.message}</p>
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
          <p className="mt-1 text-sm text-red-500">{errors.caffeine.message}</p>
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
          className="min-h-[8rem] min-w-full rounded-md border px-2 py-1 outline-none focus:border-green"
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
        ساخت محصول
      </button>
    </form>
  );
};

export default AddProduct;
