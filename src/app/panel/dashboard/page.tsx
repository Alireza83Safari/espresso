import { getComments } from "@/actions/getComments";
import { getOrders } from "@/actions/getOrders";
import { getProducts } from "@/actions/getProducts";
import { getUsers } from "@/actions/getUsers";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function page() {
  const comments = await getComments();
  const users = await getUsers();
  const products = await getProducts();
  const orders = await getOrders();

  return (
    <div className="mx-4 grid grid-cols-3 gap-x-8 gap-y-6 md:mx-10">
      <div className=" rounded-xl bg-slate-50 py-5 text-center shadow-xl duration-500 hover:bg-slate-100 hover:shadow-sm">
        <h2 className="text-2xl">نظرات</h2>
        <p className="mt-5 text-3xl text-indigo-600"> {comments?.length}</p>
        <Link href="/panel/comments" className="mt-5 text-lg underline">
          مدیریت نظرات
        </Link>
      </div>

      <div className=" rounded-xl bg-slate-50 py-5 text-center shadow-xl duration-500 hover:bg-slate-100 hover:shadow-sm">
        <h2 className="text-2xl">محصولات</h2>
        <p className="mt-5 text-3xl text-indigo-600"> {products?.length}</p>
        <Link href="/panel/products" className="mt-5 text-lg underline">
          مدیریت محصولات
        </Link>
      </div>

      <div className=" rounded-xl bg-slate-50 py-5 text-center shadow-xl duration-500 hover:bg-slate-100 hover:shadow-sm">
        <h2 className="text-2xl">کاربران</h2>
        <p className="mt-5 text-3xl text-indigo-600"> {users?.length}</p>
        <Link href="/panel/users" className="mt-5 text-lg underline">
          مدیریت کاربران
        </Link>
      </div>

      <div className=" rounded-xl bg-slate-50 py-5 text-center shadow-xl duration-500 hover:bg-slate-100 hover:shadow-sm">
        <h2 className="text-2xl">سفارشات</h2>
        <p className="mt-5 text-3xl text-indigo-600"> {orders?.length}</p>
        <Link href="/panel/orders" className="mt-5 text-lg underline">
          مدیریت سفارشات
        </Link>
      </div>
    </div>
  );
}
