import { getOrders } from "@/actions/getOrders";
import OrderTable from "./components/OrderTable";
import OrderOptions from "./components/Options";

export const dynamic = "no-cache";

export default async function page() {
  const orders = await getOrders();

  return (
    <>
      <OrderOptions orders={orders} />
      <OrderTable orders={orders} />
    </>
  );
}
