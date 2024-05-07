"use client";
import React, { useState } from "react";
import { CoffeeType } from "@/types/coffee";
import Comment from "./Comment";
import { productFooterBtn } from "@/constants/constants";

interface CoffeeFooterProps {
  coffee: CoffeeType;
}

const CoffeeFooter: React.FC<CoffeeFooterProps> = ({ coffee }) => {
  const [showMenu, setShowMenu] = useState("description");

  return (
    <div className="my-5">
      <div className="flex text-sm xs:text-base">
        {productFooterBtn?.map((item) => (
          <div
            className={`px-2 py-2 xs:px-5 ml-1${
              showMenu == item?.showMenuValue
                ? "border-x border-t-2 border-t-black bg-white"
                : " bg-gray-200"
            }`}
            onClick={() => setShowMenu(item?.showMenuValue)}
          >
            {item?.title === "نظرات"
              ? `${item?.title} (${
                  coffee?.comments.filter(
                    (comment) => comment?.status === "accept",
                  )?.length
                })`
              : item?.title}
          </div>
        ))}
      </div>
      <div className="border border-gray-200 p-2 leading-8 text-textGray sm:p-4">
        {showMenu === "description" ? (
          coffee?.description
        ) : showMenu === "completDesc" ? (
          <div className="grid grid-cols-4 font-extralight">
            <div className="col-span-1">
              <p className="border-b py-2">وزن</p>
              <p className="border-b py-2">نوع آسیاب</p>
              <p className="border-b py-2">میزان کافئین</p>
              <p className="py-2">ابزار دم آوری</p>
            </div>
            <div className="col-span-3">
              <p className="border-b py-2">{coffee?.weight}گرم</p>
              <p className="border-b py-2">
                اسپرسو خانگی, بدون آسیاب, دمی, صنعتی, فرنچ پرس, موکاپات
              </p>
              <p className="border-b py-2">{coffee?.caffeine}</p>
              <p className="py-2">
                اسپرسوساز, دمی, فرنچ پرس, کولد برو, موکاپات
              </p>
            </div>
          </div>
        ) : (
          <Comment coffee={coffee} />
        )}
      </div>
    </div>
  );
};

export default CoffeeFooter;
