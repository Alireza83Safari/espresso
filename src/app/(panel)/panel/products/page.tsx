import { getCoffees } from "@/actions/getCoffees";
import ProductsTable from "./components/ProductsTable";
import ProductsOptions from "./components/Options";
import AddProduct from "./components/AddProduct";
import PageTitle from "../components/PageTitle";

export default async function page() {
  const coffees = await getCoffees();

  return (
    <>
      <PageTitle title="محصولات" />
      <ProductsOptions coffees={coffees} />
      <AddProduct />
      <ProductsTable coffees={coffees} />
    </>
  );
}
