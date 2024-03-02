import { getOrders } from "@/actions/getOrders";
import OrderTable from "./components/OrderTable";
import OrderOptions from "./components/Options";

export const dynamic = "force-dynamic";

export default async function page() {
  const orders = await getOrders();

  return (
    <>
      <OrderOptions orders={orders} />
      <OrderTable orders={orders} />
    </>
  );
}
