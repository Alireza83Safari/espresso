import { getAddress } from "@/actions/getAddress";
import { authOptions } from "@/libs/authOptions";
import { getServerSession } from "next-auth";
import OrderPage from "./components/OrderPage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(authOptions);
  const address = await getAddress((session as any)?.id);

  return (
    <>
      <Header />
      {(session as any)?.id ? (
        <OrderPage address={address} userId={(session as any)?.id} />
      ) : (
        redirect("/login")
      )}

      <Footer />
    </>
  );
};

export default page;
