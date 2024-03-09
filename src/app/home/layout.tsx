import React from "react";
import ProductSlider from "@/components/ProductSlider";
import { getProducts } from "../../actions/getProducts";
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
  const expensiveCoffee = await getProducts();
  const mixCoffee = await getProducts(`?order=mix`);
  const pureCoffee = await getProducts(`?order=pure`);

  return (
    <>
      <Header />
      {props.banner}
      {props.category}

      <ProductSlider
        title="گران ترین قهوه های ترکیبی "
        products={expensiveCoffee}
      />
      <ProductSlider title="قهوه های عربیکا" products={pureCoffee} />
      {props.subBanner}
      <ProductSlider title="قهوه های میکس" products={mixCoffee} />
      <ProductSlider title="محصولات پیشنهادی" products={expensiveCoffee} />
      {props.possibilities}
      {props.productCategory}
      {props.brands}
      <Footer />
    </>
  );
}
