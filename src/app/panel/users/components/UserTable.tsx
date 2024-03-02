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
    <div className="overflow-x-auto md:mx-10 mx-4">
      <table className="min-w-[83.3vw] shadow-lg rounded-xl bg-slate-50">
        <thead>
          <tr className="md:text-sm text-xs text-center border-b sm:grid grid-cols-7 2xl:py-4 py-3">
            <th className="min-w-[3rem] sm:py-0 py-4">#</th>
            <th className="min-w-[6rem]">نام کاربری</th>
            <th className="min-w-[6rem]">نام</th>
            <th className="min-w-[6rem]">نام خانوادگی</th>
            <th className="min-w-[4rem]">دسترسی</th>
            <th className="min-w-[5rem]">تاریخ</th>
            <th className="min-w-[5rem]">#</th>
          </tr>
        </thead>

        <tbody>
          {!!users?.length ? (
            users?.map((user, index) => (
              <tr
                className="2xl:text-base md:text-sm text-xs text-center sm:grid grid-cols-7 2xl:py-4 py-3 "
                key={user?._id}
              >
                <td className="min-w-[3rem] sm:py-0 py-4">{index + 1}</td>
                <td className="min-w-[6rem]">{user?.username}</td>
                <td className="min-w-[6rem]">{user?.firstname}</td>
                <td className="min-w-[6rem]">{user?.lastname}</td>
                <td className="min-w-[4rem]">{user?.role}</td>
                <td className="min-w-[5rem]">
                  {user?.updatedAt?.slice(0, 10)}
                </td>

                <td className="space-x-2 flex justify-center items-center sm:mt-0 mt-4 gap-x-3 min-w-[5rem]">
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

export default UsersTable;
