import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "./components/Sidebar";
import SubHeader from "./components/SubHeader";
import { Session } from "inspector";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/authOptions";
import { redirect } from "next/navigation";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session: Session | null = await getServerSession(authOptions);
  var isAuthenticated: boolean = (session as any)?.id ? true : false;

  return (
    <>
      <Header />
      {isAuthenticated ? (
        <div className="max-w-[1080px] mx-auto container mb-32 mt-60 grid grid-cols-5">
          <Sidebar />
          <SubHeader />
          {children}
        </div>
      ) : (
        redirect("/login")
      )}
      <Footer />
    </>
  );
}