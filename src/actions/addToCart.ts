import { CartType } from "@/types/cart";
import { CoffeeType } from "@/types/coffee";
import toast from "react-hot-toast";

export const addToCart = (coffee: CoffeeType, count: number) => {
  const cart: CartType[] =
    JSON.parse(localStorage.getItem("cart") as any) || [];

  if (cart?.length) {
    const isInCart = cart.some((item) => item._id === coffee._id);

    if (isInCart) {
      cart.forEach((item) => {
        if (item._id === coffee._id) {
          item.count = item.count + count;
        }
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success("محصول با موفقیت به سبد خرید اضافه شد");
    } else {
      const cartItem = {
        _id: coffee._id,
        name: coffee.name,
        price: coffee.price,
        image: coffee.image,
        count,
      };

      cart.push(cartItem);
      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success("محصول با موفقیت به سبد خرید اضافه شد");
    }
  }
};
