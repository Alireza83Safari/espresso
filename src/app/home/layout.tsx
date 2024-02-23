import CoffeeSlider from "@/components/CoffeeSlider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default async function Layout(props: {
  banner: React.ReactNode;
  category: React.ReactNode;
  possibilities: React.ReactNode;
  productCategory: React.ReactNode;
  brands: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="max-w-[1080px] mx-auto container"></div>
      {props.banner}
      {props.category}

      <CoffeeSlider />
      <CoffeeSlider />
      <CoffeeSlider />
      {props.possibilities}
      {props.productCategory}
      {props.brands}
      <Footer />
    </>
  );
}
