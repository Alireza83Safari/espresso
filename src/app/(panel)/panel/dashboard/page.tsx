import { getComments } from "@/actions/getComments";
import { getDisounts } from "@/actions/getDiscounts";
import { getOrders } from "@/actions/getOrders";
import { getCoffees } from "@/actions/getCoffees";
import { getUsers } from "@/actions/getUsers";
import Link from "next/link";
import PageTitle from "../components/PageTitle";

export const dynamic = "force-dynamic";

export default async function page() {
  const comments = await getComments();
  const users = await getUsers();
  const coffees = await getCoffees();
  const orders = await getOrders();
  const discounts = await getDisounts();

  return (
    <>
      <PageTitle title="داشبورد" />

      <div className="grid grid-cols-1 gap-8 xs:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl bg-slate-100 py-5 text-center shadow-xl duration-500 hover:shadow-md">
          <h2 className="text-2xl">نظرات</h2>
          <p className="mt-5 text-3xl text-indigo-600"> {comments?.length}</p>
          <Link href="/panel/comments" className="mt-5 text-lg underline">
            مدیریت نظرات
          </Link>
        </div>

        <div className="rounded-xl bg-slate-100 py-5 text-center shadow-xl duration-500 hover:shadow-md">
          <h2 className="text-2xl">محصولات</h2>
          <p className="mt-5 text-3xl text-indigo-600"> {coffees?.length}</p>
          <Link href="/panel/coffees" className="mt-5 text-lg underline">
            مدیریت محصولات
          </Link>
        </div>

        <div className="rounded-xl bg-slate-100 py-5 text-center shadow-xl duration-500 hover:shadow-md">
          <h2 className="text-2xl">کاربران</h2>
          <p className="mt-5 text-3xl text-indigo-600"> {users?.length}</p>
          <Link href="/panel/users" className="mt-5 text-lg underline">
            مدیریت کاربران
          </Link>
        </div>

        <div className="rounded-xl bg-slate-100 py-5 text-center shadow-xl duration-500 hover:shadow-md">
          <h2 className="text-2xl">سفارشات</h2>
          <p className="mt-5 text-3xl text-indigo-600"> {orders?.length}</p>
          <Link href="/panel/orders" className="mt-5 text-lg underline">
            مدیریت سفارشات
          </Link>
        </div>

        <div className="rounded-xl bg-slate-100 py-5 text-center shadow-xl duration-500 hover:shadow-md">
          <h2 className="text-2xl">تخفیفات</h2>
          <p className="mt-5 text-3xl text-indigo-600"> {discounts?.length}</p>
          <Link href="/panel/discount" className="mt-5 text-lg underline">
            مدیریت تخفیفات
          </Link>
        </div>
      </div>
    </>
  );
}
