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
    <div className="col-span-4">
      <AddressList address={address} />
      <CreateAddress />
    </div>
  );
};

export default withAuth(page);
