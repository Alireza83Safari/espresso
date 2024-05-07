"use client";
import { clientRevalidateTag } from "@/helper/clientRevalidateTag";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { discountSchema } from "@/validator/client/discount";
import { useSession } from "next-auth/react";

const CreateDiscount = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(discountSchema),
  });
  const { data: session } = useSession();
  const onSubmit = async (data: any) => {
    const res = await fetch(`/api/discount`, {
      method: "POST",
      body: JSON.stringify({ ...data, user: (session as any)?.id }),
    });

    if (res.status === 200) {
      setValue("code", "");
      setValue("count", 0);
      setValue("percent", 0);
      toast.success("ساخت تخفیف موفقیت آمیز بود");
      clientRevalidateTag("discounts");
    }
  };

  return (
    <form
      className="mb-12 gap-y-6 rounded-lg bg-slate-100 p-2 shadow-lg sm:grid sm:gap-x-3 sm:p-4 md:grid-cols-2 lg:gap-x-7"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label className="block text-sm">کد تخفیف</label>
        <input
          type="text"
          className="min-w-full rounded-md border border-slate-300 bg-slate-50 px-2 py-1 outline-none focus:border-green"
          {...register("code")}
        />
        {errors.code && (
          <p className="mt-1 text-sm text-red-500">{errors.code.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm">تعداد</label>
        <input
          type="number"
          className="min-w-full rounded-md border border-slate-300 bg-slate-50 px-2 py-1 outline-none focus:border-green"
          {...register("count")}
        />
        {errors.count && (
          <p className="mt-1 text-sm text-red-500">{errors.count.message}</p>
        )}
      </div>

      <div className="col-span-2 mt-4 sm:mt-0">
        <label className="block text-sm">درصد</label>
        <input
          type="number"
          className="min-w-full rounded-md border border-slate-300 bg-slate-50 px-2 py-1 outline-none focus:border-green"
          {...register("percent")}
        />
        {errors.percent && (
          <p className="mt-1 text-sm text-red-500">{errors.percent.message}</p>
        )}
      </div>

      <button
        className="col-span-2 min-w-full rounded-lg bg-green py-2 text-white"
        type="submit"
      >
        ساخت تخفیف
      </button>
    </form>
  );
};

export default CreateDiscount;
