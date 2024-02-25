import { useEffect, useState } from "react";

interface CoffeePriceProps {
  price: number;
  coffeeWeight: number;
}

export const useCoffeePriceCalculator = (props: CoffeePriceProps) => {
  const { price, coffeeWeight } = props;
  const [calculatedPrice, setCalculatedPrice] = useState<number>(0);

  useEffect(() => {
    const calculatePrice = () => {
      const coffePrice = +(+price * +coffeeWeight) / 1000;

      setCalculatedPrice(coffePrice);
    };

    calculatePrice();
  }, [coffeeWeight]);

  return { calculatedPrice };
};
