import React from "react";
import CoffeeSlider from "@/components/CoffeeSlider";
import { getCoffees } from "@/actions/getCoffees";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function Layout(props: {
  banner: React.ReactNode;
  category: React.ReactNode;
  possibilities: React.ReactNode;
  subBanner: React.ReactNode;
  productCategory: React.ReactNode;
  brands: React.ReactNode;
}) {
  const expensiveCoffee = await getCoffees();
  const mixCoffee = await getCoffees(`?order=mix`);
  const pureCoffee = await getCoffees(`?order=pure`);

  return (
    <>
      <Header />
      {props.banner}
      {props.category}

      <CoffeeSlider
        title="گران ترین قهوه های ترکیبی "
        coffees={expensiveCoffee}
      />
      <CoffeeSlider title="قهوه های عربیکا" coffees={pureCoffee} />
      {props.subBanner}
      <CoffeeSlider title="قهوه های میکس" coffees={mixCoffee} />
      <CoffeeSlider title="محصولات پیشنهادی" coffees={expensiveCoffee} />
      {props.possibilities}
      {props.productCategory}
      {props.brands}
      <Footer />
    </>
  );
}
