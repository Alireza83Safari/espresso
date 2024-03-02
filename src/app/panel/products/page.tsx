import { getProducts } from "@/actions/getProducts";
import ProductsTable from "./components/ProductsTable";
import ProductsOptions from "./components/Options";
import AddProduct from "./components/AddProduct";

export const dynamic = "force-dynamic";

export default async function page() {
  const products = await getProducts();

  return (
    <>
      <ProductsOptions products={products} />
      <AddProduct />
      <ProductsTable products={products} />
    </>
  );
}
