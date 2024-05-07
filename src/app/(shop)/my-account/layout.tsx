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
        <div className="container mx-auto mb-32 mt-60 max-w-[1080px] md:flex">
          <Sidebar />
          <SubHeader />
          <section className="mt-10 w-full px-1 md:mt-0 md:px-3">
            {" "}
            {children}
          </section>
        </div>
      ) : (
        redirect("/login")
      )}
      <Footer />
    </>
  );
}
