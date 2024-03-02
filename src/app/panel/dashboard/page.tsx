import { getComments } from "@/actions/getComments";
import { getOrders } from "@/actions/getOrders";
import { getProducts } from "@/actions/getProducts";
import { getUsers } from "@/actions/getUsers";
import Link from "next/link";

export const dynamic = "no-cache";

export default async function page() {
  const comments = await getComments();
  const users = await getUsers();
  const products = await getProducts();
  const orders = await getOrders();

  return (
    <div className="grid grid-cols-3 md:mx-10 mx-4 gap-x-8 gap-y-6">
      <div className=" bg-slate-50 shadow-xl py-5 text-center rounded-xl hover:shadow-sm hover:bg-slate-100 duration-500">
        <h2 className="text-2xl">نظرات</h2>
        <p className="mt-5 text-3xl text-indigo-600"> {comments?.length}</p>
        <Link href="/panel/comments" className="underline mt-5 text-lg">
          مدیریت نظرات
        </Link>
      </div>

      <div className=" bg-slate-50 shadow-xl py-5 text-center rounded-xl hover:shadow-sm hover:bg-slate-100 duration-500">
        <h2 className="text-2xl">محصولات</h2>
        <p className="mt-5 text-3xl text-indigo-600"> {products?.length}</p>
        <Link href="/panel/products" className="underline mt-5 text-lg">
          مدیریت محصولات
        </Link>
      </div>

      <div className=" bg-slate-50 shadow-xl py-5 text-center rounded-xl hover:shadow-sm hover:bg-slate-100 duration-500">
        <h2 className="text-2xl">کاربران</h2>
        <p className="mt-5 text-3xl text-indigo-600"> {users?.length}</p>
        <Link href="/panel/users" className="underline mt-5 text-lg">
          مدیریت کاربران
        </Link>
      </div>

      <div className=" bg-slate-50 shadow-xl py-5 text-center rounded-xl hover:shadow-sm hover:bg-slate-100 duration-500">
        <h2 className="text-2xl">سفارشات</h2>
        <p className="mt-5 text-3xl text-indigo-600"> {orders?.length}</p>
        <Link href="/panel/orders" className="underline mt-5 text-lg">
          مدیریت سفارشات
        </Link>
      </div>
    </div>
  );
}
