import { clientRevalidateTag } from "@/helper/clientRevalidateTag";
import { apiUrl } from "@/services/apiUrl";
import toast from "react-hot-toast";

interface addToCartProps {
  product: string;
  user: string;
}

export const addToCart = async ({ product, user }: addToCartProps) => {
  if (user == undefined) {
    toast.error("ابتدا وارد حساب خود شوید");
    return false;
  }
  const res = await fetch(`${apiUrl}/api/cart`, {
    method: "POST",
    body: JSON.stringify({ product, user }),
  });

  if (res.status === 200) {
    clientRevalidateTag("cart");
    toast.success("محصول با موفقیت به سبد خرید اضافه شد");
  } else if (res.status === 422) {
    toast.error("محصول از قبل در سبد خرید وجود دارد");
  }
};
