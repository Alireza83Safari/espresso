"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaInstagram, FaSearch, FaTelegram, FaUser } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { TfiShoppingCart } from "react-icons/tfi";
import Modal from "./Modal";
import isAdmin from "@/helper/isAdmin";

const Header = () => {
  const { push } = useRouter();
  const { data: session } = useSession();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isOpenSearch, setOpenSearch] = useState(false);

  const toggleSearchModal = () => {
    setOpenSearch(!isOpenSearch);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleSearch = () => {
    if (searchQuery) {
      push(`/product?q=${searchQuery}`);
      setOpenSearch(false);
    }
  };

  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  useEffect(() => {
    if (query) {
      setSearchQuery(query);
    }
  }, [query]);

  const [isAdminBool, setIsAdminBool] = useState(false);

  useEffect(() => {
    const fetchIsAdmin = async () => {
      const { isAdminBool } = await isAdmin((session as any)?.id);
      setIsAdminBool(isAdminBool);
    };

    if (session) {
      fetchIsAdmin();
    }
  }, [session]);

  return (
    <>
      <div className="m-auto lg:container fixed top-0 right-0 left-0 z-20 bg-white min-w-full shadow-lg">
        <div className="lg:flex sm:grid sm:grid-cols-3 flex items-center justify-between max-w-[1080px] mx-auto h-[5.7rem] z-10">
          <button className="lg:hidden flex mr-2" onClick={toggleMenu}>
            <GiHamburgerMenu className="text-2xl" />
          </button>

          <Link
            href="/home"
            className="sm:text-xl text-lg font-black text-green sm:text-center"
          >
            اسپرسو گرام
          </Link>
          <div
            className={` ${
              isMenuOpen
                ? "fixed right-0 top-0 bottom-0 left-0  bg-[#dddd] z-50"
                : "lg:flex hidden"
            }`}
          >
            <button
              className={` absolute top-2 left-2 lg: ${
                isMenuOpen ? `flex` : `hidden`
              }`}
              onClick={toggleMenu}
            >
              <FaX className="text-lg" />
            </button>
            <div
              className={`lg:flex items-center ${
                isMenuOpen
                  ? "block fixed right-0 top-0 bottom-0 left- bg-gray-50"
                  : "hidden"
              }`}
            >
              <ul className="lg:flex items-center gap-x-5 lg:text-base font-semibold text-textGray">
                <li className="lg:border-none border-b lg:p-0 p-3">
                  <Link href="/home">خانه</Link>
                </li>
                <li className="lg:border-none border-b lg:p-0 p-3">وبلاگ</li>
                <li className="lg:border-none border-b lg:p-0 group transition duration-300 p-3 relative">
                  <div className="flex items-center">
                    <Link href="/product">قهوه</Link>
                    <IoIosArrowDown className="text-sm" />
                  </div>
                  <div className="lg:absolute top-7 right-0 hidden lg:group-hover:flex group-hover:block bg-white border rounded-lg border-gray-300 p-3">
                    <ul className="lg:border-l w-[11rem] px-2">
                      <li className="font-bold text-black text-lg">
                        <Link href="/product">قهوه تجاری</Link>
                      </li>
                      <li className="text-sm my-3">
                        <Link href="/product">برشته کاری درکاپی</Link>
                      </li>
                      <li className="text-sm my-3">
                        <Link href="/product">برشته کاری باکسونت</Link>
                      </li>
                    </ul>
                    <ul className="lg:border-l w-[11rem] px-2">
                      <li className="font-bold text-black text-lg">
                        <Link
                          href="/product?q=اسپشیالیتی"
                          className="font-bold text-black"
                        >
                          قهوه اسپشیالیتی
                        </Link>
                      </li>
                      <li className="text-sm my-3">
                        <Link
                          href="/product?q=اسپشیالیتی"
                          className="text-sm my-3"
                        >
                          برشته کاری درکاپی
                        </Link>
                      </li>

                      <li className="font-bold text-black text-lg">
                        <Link href="/product">قهوه تجاری</Link>
                      </li>
                    </ul>
                    <ul className="w-[11rem] px-2">
                      <li className="font-bold text-black text-lg">
                        <Link href="/product?q=اسپشیالیتی">قهوه سنتی</Link>
                      </li>
                      <li className="text-sm my-3">
                        <Link href="/product?q=کرمانی">قهوه درکاپی سنتی</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="lg:border-none border-b lg:p-0 group transition duration-300 p-3 relative">
                  <div className="flex items-center">
                    <p>محصولات مصرفی</p>
                    <IoIosArrowDown className="text-sm" />
                  </div>
                  <div className="lg:absolute top-7 right-0 hidden lg:group-hover:flex group-hover:block bg-white border rounded-lg border-gray-300 p-3">
                    <ul className="w-[11rem] px-2">
                      <li className="font-bold text-black text-lg">
                        <Link href="/product?category=powder">
                          پودرهای خوراکی
                        </Link>
                      </li>
                      <li className="text-sm my-3">
                        <Link href="/product?q=چاکلت">هات چاکلت</Link>
                      </li>
                      <li className="text-sm my-3">
                        <Link href="/product?q=ماسالا">چای ماسالا</Link>
                      </li>
                      <li className="text-sm my-3">
                        <Link href="/product?q=کاپوچینو">کاپوچینو</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="lg:border-none border-b lg:p-0 group transition duration-300 p-3 relative">
                  <div className="flex items-center">
                    <p>تجهیزات خانگی</p>
                    <IoIosArrowDown className="text-sm" />
                  </div>
                  <div className="lg:absolute top-7 right-0 hidden lg:group-hover:flex group-hover:block bg-white border rounded-lg border-gray-300 p-3">
                    <ul className="lg:border-l w-[11rem] px-2">
                      <li className="font-bold text-black text-lg">
                        <Link href="/product?category=espresso-maker">
                          قهوه ساز ها
                        </Link>
                      </li>
                      <li className="text-sm my-3">
                        <Link href="/product?q=مباشی">مباشی</Link>
                      </li>
                      <li className="text-sm my-3">
                        <Link href="/product?q=نوا">نوا</Link>
                      </li>
                    </ul>
                    <ul className="w-[11rem] px-2">
                      <li className="font-bold text-black text-lg">
                        <Link
                          href="/product?q=آسیاب"
                          className="font-bold text-black"
                        >
                          آسیاب قهوه خانگی
                        </Link>
                      </li>
                      <li className="text-sm my-3">
                        <Link href="/product?q=برقی" className="text-sm my-3">
                          آسیاب قهوه برقی
                        </Link>
                      </li>
                      <li className="text-sm my-3">
                        <Link href="/product?q=دستی" className="text-sm my-3">
                          آسیاب قهوه دستی
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                {isAdminBool && (
                  <li className="lg:border-none border-b lg:p-0 p-3 font-bold text-black">
                    <Link href="/panel/dashboard">پنل</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <div className="flex items-center text-lg mx-2 gap-x-2">
              <Link href="https://t.me/alirezasafari83">
                <FaInstagram />
              </Link>
              <Link href="https://t.me/alirezasafari83">
                <FaTelegram />
              </Link>
            </div>
            {!session ? (
              <Link
                href="/login"
                className="bg-green hover:bg-[#0A5B01] text-white rounded-lg text-sm px-2 py-[7px] ml-3 lg:flex hidden"
              >
                ورود \ عضویت
              </Link>
            ) : (
              <Link
                href="/my-account/dashboard"
                className="bg-green hover:bg-[#0A5B01] w-10 h-10 rounded-full text-white flex justify-center items-center text-lg ml-3"
              >
                <FaUser className="" />
              </Link>
            )}

            <div className="flex items-center lg:pr-3 lg:gap-x-3 lg:border-r border-textGray">
              <div
                className="p-3 rounded-full bg-green hover:bg-[#0A5B01] lg:flex hidden"
                onClick={toggleSearchModal}
              >
                <FaSearch className="text-white" />
              </div>
              <Link href="/cart">
                <TfiShoppingCart className="text-3xl ml-2" />
              </Link>
            </div>
          </div>
        </div>

        <div className="min-w-full lg:hidden">
          <div className="relative m-auto mx-3 mb-2">
            <input
              type="text"
              className="w-full pl-10 pr-3 bg-gray-100 py-2 rounded-2xl border border-gray-300 outline-none"
              placeholder="جستجو"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch
              className="absolute left-2 top-2 text-xl"
              onClick={handleSearch}
            />
          </div>
        </div>
      </div>

      <Modal isOpen={isOpenSearch} onClose={toggleSearchModal}>
        <div className="relative">
          <form className=" bg-green w-12 h-12 rounded-full absolute -right-7 text-xl flex justify-center items-center">
            <FaSearch className="text-white" onClick={handleSearch} />
          </form>
          <input
            type="text"
            className="sm:min-w-[20rem] py-3 rounded-xl pr-6 outline-none"
            placeholder="جستجو"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </Modal>
    </>
  );
};

export default Header;
