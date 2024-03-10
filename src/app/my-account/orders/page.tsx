import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/authOptions";
import { getOrders } from "@/actions/getOrders";
import { OrderType } from "@/types/order";

const page = async () => {
  const session = await getServerSession(authOptions);
  const orders = await getOrders((session as any)?.id);

  return (
    <div className="grid md:grid-cols-2">
      {!!orders?.length ? (
        orders?.map((order: OrderType) => (
          <div
            className="xs:tex-base m-2 grid min-h-[10rem] rounded-lg border p-2 px-4 text-sm duration-300 hover:bg-gray-50 lg:grid-cols-2"
            key={order?._id}
          >
            <div className="flex items-center">
              <p className="ml-2 text-sm text-textGray">نام:</p>
              <p>{order?.address?.firstname}</p>
            </div>
            <div className="flex items-center">
              <p className="ml-2 text-sm text-textGray">نام خانوادگی:</p>
              <p>{order?.address?.lastname}</p>
            </div>
            <div className="flex items-center">
              <p className="ml-2 text-sm text-textGray">مبلغ:</p>
              <p>{order?.totalPrice?.toLocaleString()}</p>
            </div>
            <div className="flex items-center">
              <p className="ml-2 text-sm text-textGray">تاریخ:</p>
              <p>{order?.createdAt?.slice(0, 10)}</p>
            </div>
            <div className="col-span-2 flex items-center">
              <p className="ml-2 text-sm text-textGray">آدرس:</p>
              <p>{order?.address?.address}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-2 flex items-center justify-center text-2xl">
          سفارشی وجود ندارد
        </div>
      )}
    </div>
  );
};

export default page;
