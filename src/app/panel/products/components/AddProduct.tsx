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
      clientRevalidateTag("product");
    }
  };

  return (
    <form
      className="sm:grid md:grid-cols-2 lg:gap-x-7 sm:gap-x-3 mb-12 gap-y-6 sm:mx-10 mx-2 sm:p-4 p-2 rounded-lg bg-slate-50 shadow-lg"
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
          <p className="text-red-500 text-sm mt-1">{errors.seedType.message}</p>
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
          <p className="text-red-500 text-sm mt-1">{errors.caffeine.message}</p>
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
          className="border min-w-full py-1 min-h-[8rem] rounded-md outline-none focus:border-green px-2"
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
        ساخت محصول
      </button>
    </form>
  );
};

export default AddProduct;
