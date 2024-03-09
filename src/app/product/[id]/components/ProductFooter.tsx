"use client";
import React, { useState } from "react";
import { ProductType } from "@/types/product";
import Comment from "./Comment";
import { productFooterBtn } from "@/constants/constants";

interface ProductFooterProps {
  product: ProductType;
}

const ProductFooter: React.FC<ProductFooterProps> = ({ product }) => {
  const [showMenu, setShowMenu] = useState("description");

  return (
    <div className="my-5">
      <div className="flex xs:text-base text-sm">
        {productFooterBtn?.map((item) => (
          <div
            className={`xs:px-5 px-2 py-2 ml-1${
              showMenu == item?.showMenuValue
                ? "bg-white border-x border-t-2 border-t-black"
                : " bg-gray-200"
            }`}
            onClick={() => setShowMenu(item?.showMenuValue)}
          >
            {item?.title === "نظرات"
              ? `${item?.title} (${
                  product?.comments.filter(
                    (comment) => comment?.status === "accept"
                  )?.length
                })`
              : item?.title}
          </div>
        ))}
      </div>
      <div className="border border-gray-200 sm:p-4 p-2 text-textGray leading-8">
        {showMenu === "description" ? (
          product?.description
        ) : showMenu === "completDesc" ? (
          <div className="grid grid-cols-4 font-extralight">
            <div className="col-span-1">
              <p className="py-2 border-b">وزن</p>
              <p className="py-2 border-b">نوع آسیاب</p>
              <p className="py-2 border-b">میزان کافئین</p>
              <p className="py-2">ابزار دم آوری</p>
            </div>
            <div className="col-span-3">
              <p className="py-2 border-b">{product?.weight}گرم</p>
              <p className="py-2 border-b">
                اسپرسو خانگی, بدون آسیاب, دمی, صنعتی, فرنچ پرس, موکاپات
              </p>
              <p className="py-2 border-b">{product?.caffeine}</p>
              <p className="py-2">
                اسپرسوساز, دمی, فرنچ پرس, کولد برو, موکاپات
              </p>
            </div>
          </div>
        ) : (
          <Comment product={product} />
        )}
      </div>
    </div>
  );
};

export default ProductFooter;
