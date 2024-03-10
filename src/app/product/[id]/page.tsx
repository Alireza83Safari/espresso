import ProductPage from "./components/ProductPage";
import { ProductType } from "@/types/product";
import { getProducts } from "@/actions/getProducts";
import { getProduct } from "@/actions/getProduct";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  const products = await getProducts();
  return products?.map((product: ProductType) => ({
    id: product?._id,
  }));
}

type Props = {
  params: { id: string };
};

/* export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  try {
    const product = await getProducts(`/${params.id}`);

    return {
      title: `${product?.name}`,
    };
  } catch (error) {
    return {
      title: "صفحه قهوه",
    };
  }
}; */

export default async function page({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  return (
    <>
      <Header />

      <section className="mx-auto px-4 xl:container ">
        <ProductPage product={product} />
      </section>

      <Footer />
    </>
  );
}
