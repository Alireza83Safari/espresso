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
      const res = await fetch(`${apiUrl}/api/address`, {
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
      className="xs:grid xs:grid-cols-2 gap-y-4 px-4"
    >
      <div className="xs:px-2">
        <label htmlFor="firstname" className="block">
          نام
        </label>
        <input
          type="text"
          {...register("firstname")}
          className={`border px-2 min-w-full py-1 rounded-md outline-none focus:border-green ${
            errors.firstname ? "border-red-500" : ""
          }`}
        />
        {errors.firstname && (
          <span className="text-red-500 text-sm">
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
          className={`border px-2 min-w-full py-1 rounded-md outline-none focus:border-green ${
            errors.lastname ? "border-red-500" : ""
          }`}
        />
        {errors.lastname && (
          <span className="text-red-500 text-sm">
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
          className={`border px-2 min-w-full py-1 rounded-md outline-none focus:border-green ${
            errors.phone ? "border-red-500" : ""
          }`}
        />
        {errors.phone && (
          <span className="text-red-500 text-sm">{errors.phone.message}</span>
        )}
      </div>

      <div className="xs:px-2">
        <label htmlFor="plaque" className="block">
          پلاک
        </label>
        <input
          type="number"
          {...register("plaque")}
          className={`border px-2 min-w-full py-1 rounded-md outline-none focus:border-green ${
            errors.plaque ? "border-red-500" : ""
          }`}
        />
        {errors.plaque && (
          <span className="text-red-500 text-sm">{errors.plaque.message}</span>
        )}
      </div>

      <div className="xs:px-2">
        <label htmlFor="city" className="block">
          شهر
        </label>
        <input
          type="text"
          {...register("city")}
          className={`border px-2 min-w-full py-1 rounded-md outline-none focus:border-green ${
            errors.city ? "border-red-500" : ""
          }`}
        />
        {errors.city && (
          <span className="text-red-500 text-sm">{errors.city.message}</span>
        )}
      </div>

      <div className="xs:px-2">
        <label htmlFor="address" className="block">
          آدرس
        </label>
        <input
          type="text"
          {...register("address")}
          className={`border px-2 min-w-full py-1 rounded-md outline-none focus:border-green ${
            errors.address ? "border-red-500" : ""
          }`}
        />
        {errors.address && (
          <span className="text-red-500 text-sm">{errors.address.message}</span>
        )}
      </div>
      <button
        className="col-span-2 bg-green text-white py-2 rounded-lg xs:mx-1 xs:w-auto w-full xs:mt-0 mt-5"
        type="submit"
      >
        افزودن آدرس
      </button>
    </form>
  );
}
