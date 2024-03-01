import Sidebar from "../components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubHeader from "../components/SubHeader";
import CreateAddress from "./components/CreateAddress";
import { getAddress } from "@/actions/getAddress";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/authOptions";
import { AddressList } from "./components/AddressList";
import { withAuth } from "@/HOCs/withAuth";

const page = async () => {
  const session = await getServerSession(authOptions);
  const address = await getAddress((session as any)?.id);

  return (
    <>
      <Header />
      <div className="max-w-[1080px] mx-auto container min-h-screen mt-60 grid grid-cols-5">
        <Sidebar />
        <SubHeader />

        <div className="col-span-4">
          <AddressList address={address} />
          <CreateAddress />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default withAuth(page);
