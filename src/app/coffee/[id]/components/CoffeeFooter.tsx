import { CoffeeType } from "@/app/types/coffee";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

interface CoffeeFooterProps {
  coffee: CoffeeType;
}
const CoffeeFooter: React.FC<CoffeeFooterProps> = ({ coffee }) => {
  const menuBtn = [
    { id: 1, title: "توضیحات", showMenuValue: "description" },
    { id: 2, title: "توضیحات تکمیلی", showMenuValue: "completDesc" },
    { id: 3, title: "نظرات (0)", showMenuValue: "comments" },
  ];
  const [showMenu, setShowMenu] = useState("description");
  const { data: session } = useSession();

  const [commentValue, setCommentValue] = useState({
    text: "",
    userId: (session as any)?.id,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setCommentValue({ ...commentValue, [name]: value });
  };

  return (
    <div className="my-5">
      <div className="flex xs:text-base text-sm">
        {menuBtn?.map((item) => (
          <div
            className={`xs:px-5 px-2 py-2 ml-1${
              showMenu == item?.showMenuValue
                ? "bg-white border-x border-t-2 border-t-black"
                : " bg-gray-200"
            }`}
            onClick={() => setShowMenu(item?.showMenuValue)}
          >
            {item?.title}
          </div>
        ))}
      </div>
      <div className="border border-gray-200 sm:p-4 p-2 text-textGray leading-8">
        {showMenu === "description" ? (
          coffee?.description
        ) : showMenu === "completDesc" ? (
          <div className="grid grid-cols-4 font-extralight">
            <div className="col-span-1">
              <p className="py-2 border-b">وزن</p>
              <p className="py-2 border-b">نوع آسیاب</p>
              <p className="py-2 border-b">میزان کافئین</p>
              <p className="py-2">ابزار دم آوری</p>
            </div>
            <div className="col-span-3">
              <p className="py-2 border-b">{coffee?.weight}گرم</p>
              <p className="py-2 border-b">
                اسپرسو خانگی, بدون آسیاب, دمی, صنعتی, فرنچ پرس, موکاپات
              </p>
              <p className="py-2 border-b">{coffee?.caffeine}</p>
              <p className="py-2">
                اسپرسوساز, دمی, فرنچ پرس, کولد برو, موکاپات
              </p>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-xl text-black">نقد و بررسی‌ها</h2>
            {true ? (
              <div>
                <div className="border p-4 grid grid-cols-2">
                  <div className="col-span-2">
                    <p>اولین کسی باشید که دیدگاهی می نویسد"{coffee?.name}"</p>

                    <div className="mt-5">
                      <label htmlFor="" className="block">
                        دیدگاه شما *
                      </label>
                      <textarea
                        name="text"
                        onChange={handleInputChange}
                        value={commentValue?.text}
                        className="border min-w-full outline-none min-h-[10rem] px-2 py-1 focus:shadow-md"
                      ></textarea>
                    </div>
                  </div>
                  <div className="sm:col-span-1 col-span-2 sm:ml-2">
                    <label htmlFor="" className="block">
                      نام *
                    </label>
                    <input
                      type="text"
                      className="border min-w-full focus:shadow-md outline-none"
                    />
                  </div>
                  <div className="sm:col-span-1 col-span-2 sm:mr-2">
                    <label htmlFor="" className="block">
                      ایمیل *
                    </label>
                    <input
                      type="text"
                      className="border min-w-full focus:shadow-md outline-none"
                    />
                  </div>

                  <div className="col-span-2 mt-8">
                    <div className="text-black">
                      <input type="checkbox" name="" id="" /> ذخیره نام، ایمیل و
                      وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی می‌نویسم.
                    </div>
                    <button className="bg-green px-6 py-1 text-white mt-3">
                      ثبت
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoffeeFooter;
