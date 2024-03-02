import { clientRevalidateTag } from "@/helper/clientRevalidateTag";
import { apiUrl } from "@/services/apiUrl";
import { ProductType } from "@/types/product";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import "@/style/star.css";

interface CommentPrice {
  product: ProductType;
}

const Comment: React.FC<CommentPrice> = ({ product }) => {
  const { data: session } = useSession();
  const [fieldErrors, setFieldErrors] = useState({
    body: false,
    rate: false,
  });
  const [commentValue, setCommentValue] = useState({
    body: "",
    rate: 0,
    product: product?._id,
    user: (session as any)?.id,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCommentValue({ ...commentValue, [name]: value });
  };

  const createComment = async () => {
    if ((session as any)?.id) {
      if (!commentValue.body.trim()) {
        setFieldErrors({ ...fieldErrors, body: true });
        toast.error("لطفاً دیدگاه خود را وارد کنید");
      }

      if (commentValue.rate === 0) {
        setFieldErrors({ ...fieldErrors, rate: true });
        toast.error("لطفاً امتیاز خود را وارد کنید");
        return;
      }

      const res = await fetch(`${apiUrl}/api/comment`, {
        method: "POST",
        body: JSON.stringify(commentValue),
      });

      if (res.status === 200) {
        setCommentValue({ ...commentValue, body: "", rate: 0 });
        toast.success("ساخت نظر موفقیت آمیز بود");
        clientRevalidateTag("comment");
      } else {
        toast.error("ابتدا وارد حساب خود شوید");
      }
    }
  };

  const comments = product?.comments;
  return (
    <>
      {comments?.map((comment) => (
        <div>
          <div className="mt-4 flex items-center">
            <div className="ml-3">
              <Image
                src="/image/user.png"
                width={40}
                height={40}
                alt=""
                className=" rounded-full w-12 h-12"
              />
            </div>
            <div>
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  <i data-star={comment?.rate}></i>
                </div>
              </div>
              <div className="flex text-black">
                <p>{comment?.createdAt?.slice(11, 16)} </p>-
                <p> {comment?.user?.username}</p>
              </div>
            </div>
          </div>

          <div>{comment?.body}</div>
        </div>
      ))}

      <div className="mt-14">
        <h2 className="text-xl text-black">نقد و بررسی‌ها</h2>
        <div className="border p-4 grid grid-cols-2">
          <div className="col-span-2">
            <p>اولین کسی باشید که دیدگاهی می نویسد"{product?.name}"</p>

            <div className="mt-5">
              <label htmlFor="" className="block">
                دیدگاه شما *
              </label>
              <textarea
                name="body"
                onChange={handleInputChange}
                value={commentValue?.body}
                className={`border min-w-full outline-none min-h-[10rem] px-2 py-1 focus:shadow-md ${
                  fieldErrors.body ? "border-red-500" : ""
                }`}
                onFocus={() => setFieldErrors({ ...fieldErrors, body: false })}
              ></textarea>
            </div>
          </div>
          <div className="sm:col-span-1 col-span-2 sm:ml-2">
            <label htmlFor="" className="block">
              امتیاز*
            </label>
            <select
              name="rate"
              value={commentValue.rate}
              onChange={(e) =>
                setCommentValue({ ...commentValue, rate: +e.target.value })
              }
              className={`border min-w-full focus:shadow-md outline-none py-[2px] ${
                fieldErrors.rate ? "border-red-500" : ""
              }`}
              onFocus={() => setFieldErrors({ ...fieldErrors, rate: false })}
            >
              <option value="1">&#11088;</option>
              <option value="2">&#11088;&#11088;</option>
              <option value="3">&#11088;&#11088;&#11088;</option>
              <option value="4">&#11088;&#11088;&#11088;&#11088;</option>
              <option value="5">
                &#11088;&#11088;&#11088;&#11088;&#11088;
              </option>
            </select>
          </div>
          <div className="sm:col-span-1 col-span-2 sm:mr-2">
            <label htmlFor="" className="block">
              ایمیل
            </label>
            <input
              type="text"
              className="border min-w-full focus:shadow-md outline-none"
            />
          </div>

          <div className="col-span-2 mt-8">
            <div className="text-black">
              <input type="checkbox" name="" id="" /> ذخیره نام، ایمیل و وبسایت
              من در مرورگر برای زمانی که دوباره دیدگاهی می‌نویسم.
            </div>
            <button
              className="bg-green px-6 py-1 text-white mt-3"
              onClick={createComment}
            >
              ثبت
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
