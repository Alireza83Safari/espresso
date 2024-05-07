import FilterCoffees from "./components/FilterCoffees";
import { getCoffees } from "@/actions/getCoffees";
import Coffees from "./components/Coffees";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { apiUrl } from "@/services/apiUrl";

export const dynamic = "force-dynamic";

export default async function page({ searchParams }: any) {
  if (!apiUrl) {
    return null;
  }
  const { order, q } = searchParams;

  let APIURL = `?`;
  if (order) APIURL += `order=${order}&`;
  if (q) APIURL += `q=${q}&`;

  const coffees = await getCoffees(APIURL !== `?` ? APIURL : "");

  return (
    <>
      <Header />

      <section className="mx-auto mb-16 mt-40 max-w-[1080px] lg:mt-32">
        <FilterCoffees />
        <Coffees coffees={coffees} />
      </section>

      <Footer />
    </>
  );
}
