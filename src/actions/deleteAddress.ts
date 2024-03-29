import { clientRevalidateTag } from "@/helper/clientRevalidateTag";
import { apiUrl } from "@/services/apiUrl";
import toast from "react-hot-toast";

export const deleteAddress = async (string: string) => {
  try {
    const res = await fetch(`/api/address/${string}`, {
      method: "DELETE",
    });
    console.log(res?.status);

    if (res.status === 200) {
      toast.success("حذف آدرس موفقیت آمیز بود");
      clientRevalidateTag("address");
    }
  } catch (error) {}
};
