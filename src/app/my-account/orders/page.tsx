import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/authOptions";
import { getOrders } from "@/actions/getOrders";
import { OrderType } from "@/types/order";

const page = async () => {
  const session = await getServerSession(authOptions);
  const orders = await getOrders((session as any)?.id);
  console.log(orders);

  return (
    <div className="grid md:grid-cols-2">
      {!!orders?.length ? (
        orders?.map((order: OrderType) => (
          <div className="grid lg:grid-cols-2 border p-2 m-2 hover:bg-gray-50 duration-300 min-h-[10rem] px-4 rounded-lg xs:tex-base text-sm">
            <div className="flex items-center">
              <p className="ml-2 text-textGray text-sm">نام:</p>
              <p>{order?.address?.firstname}</p>
            </div>
            <div className="flex items-center">
              <p className="ml-2 text-textGray text-sm">نام خانوادگی:</p>
              <p>{order?.address?.lastname}</p>
            </div>
            <div className="flex items-center">
              <p className="ml-2 text-textGray text-sm">مبلغ:</p>
              <p>{order?.totalPrice?.toLocaleString()}</p>
            </div>
            <div className="flex items-center">
              <p className="ml-2 text-textGray text-sm">تاریخ:</p>
              <p>{order?.createdAt?.slice(0, 10)}</p>
            </div>
            <div className="flex items-center col-span-2">
              <p className="ml-2 text-textGray text-sm">آدرس:</p>
              <p>{order?.address?.address}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="text-2xl flex justify-center items-center col-span-2">
          سفارشی وجود ندارد
        </div>
      )}
    </div>
  );
};

export default page;
