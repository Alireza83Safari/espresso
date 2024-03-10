"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FormSpinner from "@/components/FormSpinner/FormSpinner";
import { registerSchema } from "@/validator/client/register";
import toast from "react-hot-toast";
import { apiUrl } from "@/services/apiUrl";
import { clientRevalidateTag } from "@/helper/clientRevalidateTag";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function page() {
  const { push } = useRouter();
  const initialState = {
    username: "",
    firstname: "",
    lastname: "",
    role: "",
    password: "",
    confirmPassword: "",
  };

  const [registerInfos, setRegisterInfos] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const [isLoading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterInfos({
      ...registerInfos,
      [name]: value,
    });
  };

  const handleRegister = async () => {
    setLoading(true);
    if (!apiUrl) {
      return null;
    }
    try {
      const res = await fetch(`/api/register`, {
        method: "POST",
        body: JSON.stringify(registerInfos),
      });

      if (res.status === 200) {
        toast.success("ساخت حساب موفقیت آمیز بود");
        clientRevalidateTag("users");
        push("/login");
      } else if (res.status === 422) {
        toast.error("محصول از قبل وجود دارد");
      } else {
        toast.error("خطا در ساخت حساب");
      }
    } catch (error) {
      console.error("Registration Error:", error);
      toast.error("خطا در ارسال درخواست");
    } finally {
      setLoading(false);
    }
  };

  const formIsValid = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    try {
      const isValid = await registerSchema?.validate(registerInfos, {
        abortEarly: false,
      });
      if (isValid) {
        handleRegister();
      }
      setLoading(false);
    } catch (error) {
      let errors = (error as any).inner.reduce(
        (acc: any, error: any) => ({
          ...acc,
          [error.path]: error.message,
        }),
        {},
      );
      setErrors(errors);
      setLoading(false);
    }
  };
  return (
    <>
      <Header />

      <section className="flex min-h-screen items-center justify-center bg-white">
        <div className="min-w-[95vw] max-w-[40rem] rounded-xl px-4 py-3 shadow-2xl sm:min-w-[28rem] sm:px-0">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              ساخت حساب کاربری{" "}
            </h2>
          </div>

          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={formIsValid} method="POST">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  نام
                </label>
                <div className="mt-2">
                  <p className="text-xs text-red-500">{errors?.firstname}</p>

                  <input
                    id="firstname"
                    name="firstname"
                    onChange={handleInputChange}
                    value={registerInfos?.firstname}
                    type="text"
                    onFocus={() => setErrors(initialState)}
                    required
                    className="block w-full rounded-md border border-gray-300 bg-white px-1 py-1.5 text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:border-2 focus:border-green sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  نام خانوداگی
                </label>
                <div className="mt-2">
                  <p className="text-xs text-red-500">{errors?.lastname}</p>
                  <input
                    id="lastname"
                    name="lastname"
                    onChange={handleInputChange}
                    value={registerInfos?.lastname}
                    type="text"
                    onFocus={() => setErrors(initialState)}
                    required
                    className="block w-full rounded-md border border-gray-300 bg-white px-1 py-1.5 text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:border-2 focus:border-green sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  نام کاربری
                </label>

                <div className="mt-2">
                  <p className="text-xs text-red-500">{errors?.username}</p>

                  <input
                    id="username"
                    name="username"
                    onChange={handleInputChange}
                    value={registerInfos?.username}
                    type="text"
                    onFocus={() => setErrors(initialState)}
                    required
                    className="block w-full rounded-md border border-gray-300 bg-white px-1 py-1.5 text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:border-2 focus:border-green sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    رمز عبور
                  </label>
                </div>
                <div className="mt-2">
                  <p className="text-xs text-red-500">{errors?.password}</p>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onFocus={() => setErrors(initialState)}
                    onChange={handleInputChange}
                    value={registerInfos?.password}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border border-gray-300 bg-white px-1 py-1.5 text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:border-2 focus:border-green sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm duration-300 hover:bg-[#0A5B01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {isLoading ? <FormSpinner /> : ` ساخت حساب`}
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              حساب دارید؟{" "}
              <Link
                href="/login"
                className="font-semibold leading-6 text-green hover:bg-[#0A5B01]"
              >
                ورود به حساب
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
