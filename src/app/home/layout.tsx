import CoffeeSlider from "@/components/CoffeeSlider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default async function Layout(props: {
  banner: React.ReactNode;
  category: React.ReactNode;
  possibilities: React.ReactNode;
  subBanner: React.ReactNode;
  productCategory: React.ReactNode;
  brands: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="max-w-[1080px] mx-auto container"></div>
      {props.banner}
      {props.category}

      <CoffeeSlider title="قهوه های ترکیبی" />
      <CoffeeSlider title="قهوه های باکسونت" />
      {props.subBanner}
      <CoffeeSlider title="محصولات پودری دُرکاپی" />
      <CoffeeSlider title="محصولات پیشنهادی" />
      {props.possibilities}
      {props.productCategory}
      {props.brands}
      <Footer />
    </>
  );
}
