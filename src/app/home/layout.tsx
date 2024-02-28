import React from "react";
import ProductSlider from "@/components/ProductSlider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getProducts } from "../../actions/getProducts";

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
      <div className="max-w-[1080px] mx-auto container"></div>
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
