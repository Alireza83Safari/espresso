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
      className="mx-4 mb-12 gap-x-3 gap-y-6 rounded-lg bg-slate-50 p-2 shadow-lg sm:grid sm:grid-cols-2 sm:p-4 md:mx-10 lg:gap-x-7"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label className="block text-sm">نام</label>
        <input
          type="text"
          className="min-w-full rounded-md border px-2 py-1 outline-none focus:border-green"
          placeholder="نام"
          {...register("firstname")}
        />
        {errors.firstname && (
          <p className="mt-1 text-sm text-red-500">
            {errors.firstname.message}
          </p>
        )}
      </div>

      <div className="mt-4 sm:mt-0">
        <label className="block text-sm">نام خانوادگی</label>
        <input
          type="text"
          className="min-w-full rounded-md border px-2 py-1 outline-none focus:border-green"
          placeholder="نام خانوادگی"
          {...register("lastname")}
        />
        {errors.lastname && (
          <p className="mt-1 text-sm text-red-500">{errors.lastname.message}</p>
        )}
      </div>

      <div className="mt-4 sm:mt-0">
        <label className="block text-sm">نام کاربری</label>
        <input
          type="text"
          className="min-w-full rounded-md border px-2 py-1 outline-none focus:border-green"
          placeholder="نام کاربری"
          {...register("username")}
        />
        {errors.username && (
          <p className="mt-1 text-sm text-red-500">{errors.username.message}</p>
        )}
      </div>

      <div className="mt-4 sm:mt-0">
        <label className="block text-sm">رمز عبور</label>
        <input
          type="text"
          className="min-w-full rounded-md border px-2 py-1 outline-none focus:border-green"
          placeholder="رمز عبور"
          {...register("password")}
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <button
        className="col-span-2 mt-5 min-w-full rounded-lg bg-green py-2 text-white duration-300 hover:bg-[#0A5B01] md:mt-0"
        type="submit"
      >
        ساخت کاربر
      </button>
    </form>
  );
};

export default CreateUser;
