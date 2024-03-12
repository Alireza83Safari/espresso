import { CartType } from "@/types/cart";
import { ProductType } from "@/types/product";
import toast from "react-hot-toast";

export const addToCart = (product: ProductType, count: number) => {
  const cart: CartType[] =
    JSON.parse(localStorage.getItem("cart") as any) || [];

  if (cart?.length) {
    const isInCart = cart.some((item) => item._id === product._id);

    if (isInCart) {
      cart.forEach((item) => {
        if (item._id === product._id) {
          item.count = item.count + count;
        }
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success("محصول با موفقیت به سبد خرید اضافه شد");
    } else {
      const cartItem = {
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        count,
      };

      cart.push(cartItem);

      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success("محصول با موفقیت به سبد خرید اضافه شد");
    }
  } else {
    const cartItem = {
      _id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      count,
    };
    console.log(cartItem);

    cart.push(cartItem);

    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("محصول با موفقیت به سبد خرید اضافه شد");
  }
};
