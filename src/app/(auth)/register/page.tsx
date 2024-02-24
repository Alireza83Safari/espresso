"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FormSpinner from "@/components/FormSpinner/FormSpinner";
import { registerSchema } from "@/validator/client/register";
import toast from "react-hot-toast";

const Register: React.FC = () => {
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
  const [serverError, setServerError] = useState("");
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
    try {
      const res = await fetch(`/api/register`, {
        method: "POST",
        body: JSON.stringify(registerInfos),
      });

      if (res.status === 200) {
        toast.success("ساخت حساب موفقیت آمیز بود");
        push("/login");
        setLoading(false);
      }
      if (res.status !== 200) {
        toast.error("Invalid credentials!");
        setLoading(false);
      }
    } catch (error) {
      setServerError((error as any)?.response?.data?.message);
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
        {}
      );
      setErrors(errors);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="max-w-[40rem] sm:min-w-[28rem] min-w-[95vw] sm:px-0 px-4 py-3 rounded-xl shadow-2xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            ساخت حساب کاربری{" "}
          </h2>
          <p className="text-center text-red-600 mt-4 text-sm">{serverError}</p>
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
                  className="block w-full px-1 bg-white rounded-md py-1.5 text-gray-900 shadow-sm border border-gray-300 placeholder:text-gray-400 focus:border-2 focus:border-green outline-none sm:text-sm sm:leading-6"
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
                  className="block w-full px-1 bg-white rounded-md py-1.5 text-gray-900 shadow-sm border border-gray-300 placeholder:text-gray-400 focus:border-2 focus:border-green outline-none sm:text-sm sm:leading-6"
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
                  className="block w-full px-1 bg-white rounded-md py-1.5 text-gray-900 shadow-sm border border-gray-300 placeholder:text-gray-400 focus:border-2 focus:border-green outline-none sm:text-sm sm:leading-6"
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
                  className="block w-full px-1 bg-white rounded-md py-1.5 text-gray-900 shadow-sm border border-gray-300 placeholder:text-gray-400 focus:border-2 focus:border-green outline-none sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#0A5B01] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoading ? <FormSpinner /> : ` ساخت حساب`}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            حساب دارید؟{" "}
            <Link
              href="/login"
              className="font-semibold leading-6 text-green hover:[#0A5B01]"
            >
              ورود به حساب
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;