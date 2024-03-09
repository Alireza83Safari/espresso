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
    <div className="overflow-x-auto md:mx-10 mx-4">
      <table className="w-full md:w-[83.3vw] shadow-lg rounded-xl bg-slate-50">
        <thead>
          <tr className="md:text-sm text-xs text-center border-b md:grid grid-cols-8 2xl:py-4 py-3">
            <th className="min-w-[3rem] md:py-0 py-4">#</th>
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
                className="2xl:text-base md:text-sm text-xs text-center md:grid grid-cols-8 2xl:py-4 py-3"
                key={comment?._id}
              >
                <td className="min-w-[3rem] md:py-0 py-5">{index + 1}</td>
                <td className=" min-w-[7rem]">{comment?.user?.username}</td>
                <td className="flex justify-center min-w-[5rem]">
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
                        className="bg-red-500 text-white px-3 text-sm"
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
                        className="bg-green text-white px-2 text-sm"
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

                <td className=" space-x-2 flex justify-center gap-x-3 min-w-[5rem]">
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
                <div className="flex justify-center items-center mt-32 text-xl">
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
