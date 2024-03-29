"use client";
import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { UserType } from "@/types/user";
import { apiUrl } from "@/services/apiUrl";
import { clientRevalidateTag } from "@/helper/clientRevalidateTag";
import toast from "react-hot-toast";

interface UsersTableProps {
  users: UserType[];
}

const UsersTable: React.FC<UsersTableProps> = ({ users }) => {
  const deleteUser = async (id: string) => {
    const res = await fetch(`${apiUrl}/api/user/${id}`, {
      method: "DELETE",
    });

    if (res.status === 200) {
      toast.success("کاربر با موفقیت حذف شد");
      clientRevalidateTag("users");
    }
  };
  return (
    <div className="mx-4 overflow-x-auto md:mx-10">
      <table className="min-w-[83.3vw] rounded-xl bg-slate-100 shadow-lg">
        <thead>
          <tr className="grid-cols-7 border-b py-3 text-center text-xs sm:grid md:text-sm 2xl:py-4 [&>th]:min-w-[5rem]">
            <th className="min-w-[3rem] py-4 sm:py-0">#</th>
            <th>نام کاربری</th>
            <th>نام</th>
            <th>نام خانوادگی</th>
            <th>دسترسی</th>
            <th>تاریخ</th>
            <th>#</th>
          </tr>
        </thead>

        <tbody>
          {!!users?.length ? (
            users?.map((user, index) => (
              <tr
                className="grid-cols-7 py-3 text-center text-xs sm:grid md:text-sm 2xl:py-4 2xl:text-base [&>td]:min-w-[5rem] [&>td]:min-h-[3rem]"
                key={user?._id}
              >
                <td className="py-4 sm:py-0">{index + 1}</td>
                <td>{user?.username}</td>
                <td>{user?.firstname}</td>
                <td>{user?.lastname}</td>
                <td>{user?.role}</td>
                <td>{user?.updatedAt?.slice(0, 10)}</td>

                <td className="mt-4 flex items-center justify-center gap-x-3 space-x-2 sm:mt-0">
                  <FaTrashAlt
                    className="text-red-500"
                    onClick={() => deleteUser(user?._id)}
                  />
                  <FaEdit className="text-orange-600" />
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

export default UsersTable;
