import { CartType } from "@/types/cart";
import toast from "react-hot-toast";

export const deleteCart = (productId: string, getCart: any) => {
  const cart: CartType[] = JSON.parse(localStorage.getItem("cart") as any);
  const findCart = cart.filter((cart) => cart._id !== productId);
  localStorage.setItem("cart", JSON.stringify(findCart));
  toast.success("محصول با موفقیت به سبد خرید اضافه شد");
  getCart();
};
