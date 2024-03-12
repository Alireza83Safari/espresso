import { getAddress } from "@/actions/getAddress";
import { authOptions } from "@/libs/authOptions";
import { getServerSession } from "next-auth";
import OrderPage from "./components/OrderPage";
import { redirect } from "next/navigation";
import OrderHeader from "./components/OrderHeader";

const page = async () => {
  const session = await getServerSession(authOptions);
  const address = await getAddress((session as any)?.id);

  return (
    <section className="m-auto max-w-[1080px] ">
      {(session as any)?.id ? (
        <>
          <OrderHeader />
          <OrderPage address={address} userId={(session as any)?.id} />
        </>
      ) : (
        redirect("/login")
      )}
    </section>
  );
};

export default page;
