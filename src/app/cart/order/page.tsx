import { getAddress } from "@/actions/getAddress";
import { getCartItem } from "@/actions/getCartItem";
import { authOptions } from "@/libs/authOptions";
import { getServerSession } from "next-auth";
import OrderPage from "./components/OrderPage";

const page = async () => {
  const session = await getServerSession(authOptions);
  const cartItem = await getCartItem((session as any)?.id);
  const address = await getAddress((session as any)?.id);
  return (
    <>
      <OrderPage
        address={address}
        cartItem={cartItem}
        userId={(session as any)?.id}
      />
    </>
  );
};

export default page;
