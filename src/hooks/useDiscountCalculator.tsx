import { useState, useEffect } from "react";

interface DiscountData {
  discountPercent: number;
  totalPrice: number;
}

const useDiscountCalculator = (initialData: DiscountData) => {
  const [discountData, setDiscountData] = useState(initialData);
  const [discountedPrice, setDiscountedPrice] = useState<number | null>(null);

  useEffect(() => {
    const calculateDiscount = () => {
      const { discountPercent, totalPrice } = discountData;
      const discountAmount = (discountPercent / 100) * totalPrice;
      const discountedPrice = totalPrice - discountAmount;
      setDiscountedPrice(discountedPrice);
    };

    calculateDiscount();
  }, [discountData]);

  const updateDiscountData = (newData: DiscountData) => {
    setDiscountData(newData);
  };

  return { discountData, discountedPrice, updateDiscountData };
};

export default useDiscountCalculator;
