"use client";
import React from "react";
import { clientRevalidateTag } from "@/helper/clientRevalidateTag";
import { apiUrl } from "@/services/apiUrl";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { registerSchema } from "@/validator/client/register";

const CreateUser = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data: any) => {
    const res = await fetch(`${apiUrl}/api/register`, {
      method: "POST",
      body: JSON.stringify({ ...data, role: "USER" }),
    });

    if (res.status === 200) {
      setValue("firstname", "");
      setValue("lastname", "");
      setValue("username", "");
      setValue("password", "");
      toast.success("ساخت کاربر موفقیت آمیز بود");
      clientRevalidateTag("user");
    }
  };

  return (
    <form
      className="sm:grid sm:grid-cols-2 lg:gap-x-7 gap-x-3 mb-12 gap-y-6 md:mx-10 mx-4 sm:p-4 p-2 rounded-lg bg-slate-50 shadow-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label className="block text-sm">نام</label>
        <input
          type="text"
          className="border min-w-full py-1 rounded-md outline-none focus:border-green px-2"
          placeholder="نام"
          {...register("firstname")}
        />
        {errors.firstname && (
          <p className="text-red-500 text-sm mt-1">
            {errors.firstname.message}
          </p>
        )}
      </div>

      <div className="sm:mt-0 mt-4">
        <label className="block text-sm">نام خانوادگی</label>
        <input
          type="text"
          className="border min-w-full py-1 rounded-md outline-none focus:border-green px-2"
          placeholder="نام خانوادگی"
          {...register("lastname")}
        />
        {errors.lastname && (
          <p className="text-red-500 text-sm mt-1">{errors.lastname.message}</p>
        )}
      </div>

      <div className="sm:mt-0 mt-4">
        <label className="block text-sm">نام کاربری</label>
        <input
          type="text"
          className="border min-w-full py-1 rounded-md outline-none focus:border-green px-2"
          placeholder="نام کاربری"
          {...register("username")}
        />
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
        )}
      </div>

      <div className="sm:mt-0 mt-4">
        <label className="block text-sm">رمز عبور</label>
        <input
          type="text"
          className="border min-w-full py-1 rounded-md outline-none focus:border-green px-2"
          placeholder="رمز عبور"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        className="min-w-full bg-green py-2 rounded-lg text-white col-span-2 hover:bg-[#0A5B01] duration-300 md:mt-0 mt-5"
        type="submit"
      >
        ساخت کاربر
      </button>
    </form>
  );
};

export default CreateUser;
