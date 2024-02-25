import { getCoffeees } from "@/app/actions/getCoffees";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";
import CoffeePage from "./components/CoffeePage";
import { CoffeeType } from "@/app/types/coffee";

export async function generateStaticParams() {
  const coffees = await getCoffeees("");

  return coffees?.map((coffee: CoffeeType) => ({
    id: coffee?._id,
  }));
}

type Props = {
  params: { id: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  try {
    const coffee = await getCoffeees(`/${params.id}`);

    return {
      title: `${coffee?.name}`,
    };
  } catch (error) {
    return {
      title: "صفحه قهوه",
    };
  }
};

export default async function page({ params }: { params: { id: string } }) {
  const coffee = await getCoffeees(`/${params.id}`);

  return (
    <>
      <Header />
      <div className="xl:container mx-auto px-4 ">
        <CoffeePage coffee={coffee} />
      </div>
      <Footer />
    </>
  );
}
