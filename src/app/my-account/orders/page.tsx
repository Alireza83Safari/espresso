import Sidebar from "../components/Sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/authOptions";
import SubHeader from "../components/SubHeader";
import { getOrders } from "@/actions/getOrders";
import { OrderType } from "@/types/order";
import { withAuth } from "@/HOCs/withAuth";

const page = async () => {
  const session = await getServerSession(authOptions);
  const orders = await getOrders((session as any)?.id);
  return (
    <div className="max-w-[1080px] mx-auto container min-h-screen mt-60 grid grid-cols-5">
      <Sidebar />
      <SubHeader />

      <div className="col-span-4 grid md:grid-cols-2 sm:pr-5">
        {!!orders?.length ? (
          orders?.map((order: OrderType) => (
            <div className="grid grid-cols-2 border p-2 m-2 hover:bg-gray-50 duration-300">
              <div className="flex items-center">
                <div className="ml-2 text-textGray text-sm">نام:</div>
                <div>{order?.address?.firstname}</div>
              </div>
              <div className="flex items-center">
                <div className="ml-2 text-textGray text-sm">نام خانوادگی</div>
                <div>{order?.address?.lastname}</div>
              </div>
              <div className="flex items-center">
                <div className="ml-2 text-textGray text-sm">مبلغ</div>
                <div>{order?.totalPrice?.toLocaleString()}</div>
              </div>
              <div className="flex items-center">
                <div className="ml-2 text-textGray text-sm">مبلغ</div>
                <div>{order?.createdAt?.slice(0, 10)}</div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-2xl flex justify-center items-center col-span-2">
            سفارشی وجود ندارد
          </div>
        )}
      </div>
    </div>
  );
};
export default withAuth(page);
