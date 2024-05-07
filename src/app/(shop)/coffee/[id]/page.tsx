import Coffee from "./components/Coffee";
import { CoffeeType } from "@/types/coffee";
import { getCoffees } from "@/actions/getCoffees";
import { getCoffee } from "@/actions/getCoffee";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  const coffees = await getCoffees();
  return coffees?.map((coffee: CoffeeType) => ({
    id: coffee?._id,
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
  const coffee = await getCoffee(params.id);

  return (
    <>
      <Header />

      <section className="mx-auto px-4 xl:container ">
        <Coffee coffee={coffee} />
      </section>

      <Footer />
    </>
  );
}
