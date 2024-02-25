import React from "react";
import CoffeeSlider from "@/components/CoffeeSlider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getCoffeees } from "../actions/getCoffees";

export default async function Layout(props: {
  banner: React.ReactNode;
  category: React.ReactNode;
  possibilities: React.ReactNode;
  subBanner: React.ReactNode;
  productCategory: React.ReactNode;
  brands: React.ReactNode;
}) {
  const expensiveCoffee = await getCoffeees();
  const mixCoffee = await getCoffeees(`?order=mix`);
  const pureCoffee = await getCoffeees(`?order=pure`);

  return (
    <>
      <Header />
      <div className="max-w-[1080px] mx-auto container"></div>
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
