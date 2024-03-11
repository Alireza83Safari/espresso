"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/validator/client/login";
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import FormSpinner from "@/components/FormSpinner/FormSpinner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Login: React.FC = () => {
  const { push } = useRouter();
  const { data: session } = useSession();
  const [isLoading, setLoading] = useState(false);
  const initialState = {
    username: "",
    password: "",
    userId: "",
  };
  const [userLoginInfos, setUserLoginInfos] = useState(initialState);
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState() as any;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserLoginInfos({
      ...userLoginInfos,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/login`, {
        method: "POST",
        body: JSON.stringify(userLoginInfos),
      });

      const data = await res.json();
      const userDatas = { ...userLoginInfos, userId: data?._id };

      if (res.status === 200) {
        signIn("credentials", {
          ...userDatas,
          redirect: false,
        }).then((callback) => {
          if (callback?.error) {
            toast.error("Invalid credentials!");
          }

          if (callback?.ok) {
            toast.success("ورود موفقیت آمیز بود");
            push("/");
          }
        });
        setLoading(false);
      }
      if (res.status !== 200) {
        setServerError(data?.message);
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
      const isValid = await loginSchema?.validate(userLoginInfos, {
        abortEarly: false,
      });
      if (isValid) {
        await handleLogin();
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

  useEffect(() => {
    if (session) {
      push("/home");
    }
  }, [session]);

  return (
    <>
      <Header />

      <section className="mt-4 flex min-h-screen items-center justify-center bg-white">
        <div className="min-w-[95vw] max-w-[40rem] rounded-xl px-4 py-3 shadow-2xl sm:min-w-[28rem] sm:px-0">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              ورود به حساب کاربری{" "}
            </h2>
            <p className="mt-4 text-center text-sm text-red-600">
              {serverError}
            </p>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={formIsValid} method="POST">
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
                    value={userLoginInfos?.username}
                    type="text"
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
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-green hover:text-indigo-500"
                    >
                      فراموشی رمز عبور ؟
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-xs text-red-500">{errors?.password}</p>

                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleInputChange}
                    value={userLoginInfos?.password}
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
                  {isLoading ? <FormSpinner /> : `ورود به حساب`}
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              عضو نیستید؟
              <Link
                href="/register"
                className="font-semibold leading-6 text-green hover:text-[#0A5B01]"
              >
                ساخت حساب
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Login;
