import { getOrders } from "@/actions/getOrders";
import OrderTable from "./components/OrderTable";
import OrderOptions from "./components/Options";
import PageTitle from "../components/PageTitle";

export default async function page() {
  const orders = await getOrders();

  return (
    <>
      <PageTitle title="سفارشات" />
      <OrderOptions orders={orders} />
      <OrderTable orders={orders} />
    </>
  );
}
