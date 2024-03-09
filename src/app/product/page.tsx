import FilterProduct from "./components/FilterProduct";
import { getProducts } from "../../actions/getProducts";
import ProductsPage from "./components/ProductsPage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default async function page({ searchParams }: any) {
  const { order, q } = searchParams;

  let APIURL = `?`;
  if (order) APIURL += `order=${order}&`;
  if (q) APIURL += `q=${q}&`;

  const products = await getProducts(APIURL !== `?` ? APIURL : "");

  return (
    <>
      <Header />

      <section className="lg:mt-32 mt-40 mx-auto max-w-[1080px] mb-16">
        <FilterProduct />
        <ProductsPage products={products} />
      </section>

      <Footer />
    </>
  );
}
