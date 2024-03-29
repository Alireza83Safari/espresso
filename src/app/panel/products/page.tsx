import { getProducts } from "@/actions/getProducts";
import ProductsTable from "./components/ProductsTable";
import ProductsOptions from "./components/Options";
import AddProduct from "./components/AddProduct";
import PageTitle from "../components/PageTitle";

export default async function page() {
  const products = await getProducts();

  return (
    <>
      <PageTitle title="محصولات" />
      <ProductsOptions products={products} />
      <AddProduct />
      <ProductsTable products={products} />
    </>
  );
}
