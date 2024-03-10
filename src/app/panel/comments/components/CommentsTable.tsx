"use client";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { CommentType } from "@/types/comment";
import Image from "next/image";
import { apiUrl } from "@/services/apiUrl";
import toast from "react-hot-toast";
import { clientRevalidateTag } from "@/helper/clientRevalidateTag";

interface CommentsTableProps {
  comments: CommentType[];
}

interface changeCommentStatusProps {
  commentId: string;
  status: string;
}

const CommentsTable: React.FC<CommentsTableProps> = ({ comments }) => {
  const deleteComment = async (id: string) => {
    const res = await fetch(`${apiUrl}/api/comment/${id}`, {
      method: "DELETE",
    });

    if (res.status === 200) {
      toast.success("نظر با موفقیت حذف شد");
      clientRevalidateTag("comment");
    }
  };

  const changeCommentStatus = async ({
    commentId,
    status,
  }: changeCommentStatusProps) => {
    const res = await fetch(`${apiUrl}/api/comment/${commentId}`, {
      method: "PUT",
      body: JSON.stringify({ status }),
    });

    if (res?.status === 200) {
      toast.success("تغییر وضعیت کامنت موفقیت آمیز بود");
    }
    clientRevalidateTag("comment");
  };

  return (
    <div className="mx-4 overflow-x-auto md:mx-10">
      <table className="w-full rounded-xl bg-slate-50 shadow-lg md:w-[83.3vw]">
        <thead>
          <tr className="grid-cols-8 border-b py-3 text-center text-xs md:grid md:text-sm 2xl:py-4">
            <th className="min-w-[3rem] py-4 md:py-0">#</th>
            <th className="min-w-[7rem]">کاربر</th>
            <th className="min-w-[5rem]">عکس</th>
            <th className="min-w-[5rem]">امتیاز</th>
            <th className="min-w-[8rem]">متن</th>
            <th className="min-w-[8rem]">وضعیت</th>
            <th className="min-w-[5rem]">تاریخ</th>
            <th className="min-w-[5rem]">#</th>
          </tr>
        </thead>

        <tbody>
          {!!comments?.length ? (
            comments?.map((comment, index) => (
              <tr
                className="grid-cols-8 py-3 text-center text-xs md:grid md:text-sm 2xl:py-4 2xl:text-base"
                key={comment?._id}
              >
                <td className="min-w-[3rem] py-5 md:py-0">{index + 1}</td>
                <td className=" min-w-[7rem]">{comment?.user?.username}</td>
                <td className="flex min-w-[5rem] justify-center">
                  <Image
                    src={comment?.product?.image}
                    width={40}
                    height={40}
                    alt=""
                  />
                </td>
                <td className="min-min-w-[5rem]">{comment?.rate}</td>
                <td className="min-w-[8rem]">{comment?.body?.slice(0, 20)}</td>
                <td className="min-w-[5rem]">
                  {comment?.status === "pending" ? (
                    <>
                      <button
                        className="bg-red-500 px-3 text-sm text-white"
                        onClick={() =>
                          changeCommentStatus({
                            commentId: comment?._id,
                            status: "reject",
                          })
                        }
                      >
                        رد
                      </button>
                      <button
                        className="bg-green px-2 text-sm text-white"
                        onClick={() =>
                          changeCommentStatus({
                            commentId: comment?._id,
                            status: "accept",
                          })
                        }
                      >
                        قبول
                      </button>
                    </>
                  ) : (
                    <span
                      className={
                        comment?.status === "accept"
                          ? "text-green"
                          : "text-red-500"
                      }
                    >
                      {comment?.status === "accept" ? "قبول شده" : "رد شده"}
                    </span>
                  )}
                </td>
                <td className="min-w-[5rem]">
                  {comment?.updatedAt?.slice(0, 10)}
                </td>

                <td className=" flex min-w-[5rem] justify-center gap-x-3 space-x-2">
                  <FaTrashAlt
                    className="text-red-500"
                    onClick={() => deleteComment(comment?._id)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>
                <div className="mt-32 flex items-center justify-center text-xl">
                  سفارشی یافت نشد
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CommentsTable;
