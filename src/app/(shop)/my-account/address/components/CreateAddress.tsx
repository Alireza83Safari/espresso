"use client";
import { useSession } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addressSchema } from "@/validator/client/address";
import { CtreateAddress } from "@/types/address";
import toast from "react-hot-toast";
import { apiUrl } from "@/services/apiUrl";
import { clientRevalidateTag } from "@/helper/clientRevalidateTag";

export default function CreateAddress() {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CtreateAddress>({
    resolver: yupResolver(addressSchema),
  });

  const onSubmit: SubmitHandler<CtreateAddress> = async (data) => {
    if (!apiUrl) {
      return null;
    }
    if ((session as any)?.id) {
      const res = await fetch(`/api/address`, {
        method: "POST",
        body: JSON.stringify({ ...data, user: (session as any)?.id }),
      });

      if (res.status === 200) {
        clientRevalidateTag("address");
        toast.success("ساخت آدرس موفقیت آمیز بود");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="gap-y-4 px-4 xs:grid xs:grid-cols-2"
    >
      <div className="xs:px-2">
        <label htmlFor="firstname" className="block">
          نام
        </label>
        <input
          type="text"
          {...register("firstname")}
          className={`min-w-full rounded-md border px-2 py-1 outline-none focus:border-green ${
            errors.firstname ? "border-red-500" : ""
          }`}
        />
        {errors.firstname && (
          <span className="text-sm text-red-500">
            {errors.firstname.message}
          </span>
        )}
      </div>

      <div className="xs:px-2">
        <label htmlFor="lastname" className="block">
          نام خانوادگی
        </label>
        <input
          type="text"
          {...register("lastname")}
          className={`min-w-full rounded-md border px-2 py-1 outline-none focus:border-green ${
            errors.lastname ? "border-red-500" : ""
          }`}
        />
        {errors.lastname && (
          <span className="text-sm text-red-500">
            {errors.lastname.message}
          </span>
        )}
      </div>

      <div className="xs:px-2">
        <label htmlFor="phone" className="block">
          شماره
        </label>
        <input
          type="number"
          {...register("phone")}
          className={`min-w-full rounded-md border px-2 py-1 outline-none focus:border-green ${
            errors.phone ? "border-red-500" : ""
          }`}
        />
        {errors.phone && (
          <span className="text-sm text-red-500">{errors.phone.message}</span>
        )}
      </div>

      <div className="xs:px-2">
        <label htmlFor="plaque" className="block">
          پلاک
        </label>
        <input
          type="number"
          {...register("plaque")}
          className={`min-w-full rounded-md border px-2 py-1 outline-none focus:border-green ${
            errors.plaque ? "border-red-500" : ""
          }`}
        />
        {errors.plaque && (
          <span className="text-sm text-red-500">{errors.plaque.message}</span>
        )}
      </div>

      <div className="xs:px-2">
        <label htmlFor="city" className="block">
          شهر
        </label>
        <input
          type="text"
          {...register("city")}
          className={`min-w-full rounded-md border px-2 py-1 outline-none focus:border-green ${
            errors.city ? "border-red-500" : ""
          }`}
        />
        {errors.city && (
          <span className="text-sm text-red-500">{errors.city.message}</span>
        )}
      </div>

      <div className="xs:px-2">
        <label htmlFor="address" className="block">
          آدرس
        </label>
        <input
          type="text"
          {...register("address")}
          className={`min-w-full rounded-md border px-2 py-1 outline-none focus:border-green ${
            errors.address ? "border-red-500" : ""
          }`}
        />
        {errors.address && (
          <span className="text-sm text-red-500">{errors.address.message}</span>
        )}
      </div>
      <button
        className="col-span-2 mt-5 w-full rounded-lg bg-green py-2 text-white xs:mx-1 xs:mt-0 xs:w-auto"
        type="submit"
      >
        افزودن آدرس
      </button>
    </form>
  );
}
