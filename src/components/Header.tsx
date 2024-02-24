"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { FaInstagram, FaSearch, FaTelegram, FaUser } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { TfiShoppingCart } from "react-icons/tfi";

const Header = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="m-auto lg:container fixed top-0 right-0 left-0 z-20 bg-white shadow-lg">
      <div className="lg:flex sm:grid sm:grid-cols-3 flex items-center justify-between max-w-[1080px] mx-auto h-[5.7rem] z-10">
        <button className="lg:hidden flex mr-2" onClick={toggleMenu}>
          <GiHamburgerMenu className="text-2xl" />
        </button>

        <p className="sm:text-xl text-lg font-black text-green sm:text-center">
          اسپرسو گرام
        </p>
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
              <li className="lg:border-none border-b lg:p-0 p-3 group relative">
                <div className="">
                  <span>خانه</span>
                  <div className="absolute top-5 left-0 hidden group-hover:block bg-white border rounded-lg border-gray-300 p-3">
                    <ul>
                      <li>1</li>
                      <li>1</li>
                      <li>1</li>
                      <li>1</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="lg:border-none border-b lg:p-0 p-3">وبلاگ</li>
              <li className="lg:border-none border-b lg:p-0 p-3">قهوه</li>
              <li className="flex items-center lg:border-none border-b lg:p-0 p-3">
                <p>محصولات مصرفی</p>
                <IoIosArrowDown className="text-sm" />
              </li>

              <li className="lg:border-none border-b lg:p-0 group transition duration-300 p-3 relative">
                <div className="flex items-center">
                  <p>تجهیزات خانگی</p>
                  <IoIosArrowDown className="text-sm" />
                </div>
                <div className="absolute  top-5 left-0 hidden group-hover:flex bg-white border rounded-lg border-gray-300 p-3">
                  <ul className="border-l pl-5">
                    <li className="font-bold text-black">اسپرسوساز</li>
                    <li className="text-sm my-3">مباشی</li>
                    <li className="text-sm my-3">مباشی</li>
                    <li className="text-sm my-3">مباشی</li>
                    <li className="text-sm my-3">مباشی</li>
                  </ul>
                  <ul className="pr-5">
                    <li className="font-bold text-black">اسپرسوساز</li>
                    <li className="text-sm my-3">مباشی</li>
                    <li className="text-sm my-3">مباشی</li>
                    <li className="text-sm my-3">مباشی</li>
                    <li className="text-sm my-3">مباشی</li>
                  </ul>
                </div>
              </li>

              <li className="flex items-center lg:border-none border-b lg:p-0 p-3">
                <p>کافی شاپ</p>
                <IoIosArrowDown className="text-sm" />
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <div className="flex items-center text-lg mx-2 gap-x-2">
            <FaInstagram />
            <FaTelegram />
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
              href="/login"
              className="bg-green hover:bg-[#0A5B01] w-10 h-10 rounded-full text-white flex justify-center items-center text-lg ml-3"
            >
              <FaUser className="" />
            </Link>
          )}

          <div className="flex items-center lg:pr-3 lg:gap-x-3 lg:border-r border-textGray">
            <div className="p-3 rounded-full bg-green hover:bg-[#0A5B01] lg:flex hidden">
              <FaSearch className="text-white" />
            </div>
            <TfiShoppingCart className="text-3xl ml-2" />
          </div>
        </div>
      </div>

      <div className="min-w-full lg:hidden grid grid-cols-12">
        <select
          name=""
          id=""
          className="col-span-2 bg-gray-100 rounded-2xl border border-gray-300 mr-3"
        >
          <option value="">همه</option>
          <option value="">1</option>
          <option value="">1</option>
          <option value="">1</option>
          <option value="">1</option>
        </select>

        <div className="relative m-auto mx-3 col-span-10">
          <input
            type="text"
            className="w-full pl-10 pr-3 bg-gray-100 py-2 rounded-2xl border border-gray-300 outline-none"
            placeholder="جستجو"
          />
          <FaSearch className=" absolute left-2 top-2 text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Header;
