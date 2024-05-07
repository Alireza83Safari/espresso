import { clientRevalidateTag } from "@/helper/clientRevalidateTag";
import { apiUrl } from "@/services/apiUrl";
import { CoffeeType } from "@/types/coffee";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import "@/style/star.css";

interface CommentPrice {
  coffee: CoffeeType;
}

const Comment: React.FC<CommentPrice> = ({ coffee }) => {
  const { data: session } = useSession();
  const [fieldErrors, setFieldErrors] = useState({
    body: false,
    rate: false,
  });
  const [commentValue, setCommentValue] = useState({
    body: "",
    rate: 0,
    coffee: coffee?._id,
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

  const comments = coffee?.comments;
  return (
    <>
      {comments
        .filter((comment) => comment?.status === "accept")
        ?.map((comment) => (
          <div>
            <div className="mt-4 flex items-center">
              <div className="ml-3">
                <Image
                  src="/image/user.png"
                  width={40}
                  height={40}
                  alt=""
                  className=" h-12 w-12 rounded-full"
                />
              </div>
              <div>
                <div className="mt-2 flex items-center">
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
        <div className="grid grid-cols-2 border p-4">
          <div className="col-span-2">
            <p>اولین کسی باشید که دیدگاهی می نویسد"{coffee?.name}"</p>

            <div className="mt-5">
              <label htmlFor="" className="block">
                دیدگاه شما *
              </label>
              <textarea
                name="body"
                onChange={handleInputChange}
                value={commentValue?.body}
                className={`min-h-[10rem] min-w-full border px-2 py-1 outline-none focus:shadow-md ${
                  fieldErrors.body ? "border-red-500" : ""
                }`}
                onFocus={() => setFieldErrors({ ...fieldErrors, body: false })}
              ></textarea>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 sm:ml-2">
            <label htmlFor="" className="block">
              امتیاز*
            </label>
            <select
              name="rate"
              value={commentValue.rate}
              onChange={(e) =>
                setCommentValue({ ...commentValue, rate: +e.target.value })
              }
              className={`min-w-full border py-[2px] outline-none focus:shadow-md ${
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
          <div className="col-span-2 sm:col-span-1 sm:mr-2">
            <label htmlFor="" className="block">
              ایمیل
            </label>
            <input
              type="text"
              className="min-w-full border outline-none focus:shadow-md"
            />
          </div>

          <div className="col-span-2 mt-8">
            <div className="text-black">
              <input type="checkbox" name="" id="" /> ذخیره نام، ایمیل و وبسایت
              من در مرورگر برای زمانی که دوباره دیدگاهی می‌نویسم.
            </div>
            <button
              className="mt-3 bg-green px-6 py-1 text-white"
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
