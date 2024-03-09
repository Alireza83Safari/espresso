import Image from "next/image";
import { getProducts } from "../../actions/getProducts";
import ProductSlider from "@/components/ProductSlider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default async function page() {
  const coffees = await getProducts();

  return (
    <>
      <Header />

      <section className="m-auto max-w-[1080px] my-16 mt-24">
        <Image
          src="/image/man-drinking-high-caff-coffee.webp"
          width={500}
          height={500}
          alt=""
          className="min-w-full object-contain"
        />
        <p className="mt-5 text-lg leading-8 text-textGray">
          به صورت کلی قهوه‌ کافئین بالا یا حتی قهوه فول کافئین از اون دسته قهوه
          هایی هست که شما حتما یکبار باید امتحان کنید. این قهوه ها معمولا از
          درصد بالایی دان روبوستا تشکیل میشن. با نوشیدن این قهوه ها شما انرژی
          لازم برای ورزش، شب امتحان و یا حتی صبح زود قبل از سر کار رفتن رو
          بگیرین. از لیست زیر میتونید محصولی که دوست دارید رو خریداری کنید.{" "}
        </p>
        <ProductSlider title="" products={coffees} />
        <p className="mt-10 text-lg leading-8 text-textGray">
          کافئین به صورت طبیعی باعث افزایش جریان خون و افزایش متابولیسم میشه و
          در نتیجه بدن شما تشویق به فعالیت بیشتر میشه. اگه به دنبال کاهش وزن
          هستید قهوه های روبوستا بالا یک انتخاب عالی برای شماست. ما سه لاین
          معروف پر کافئین قهوه ایران رو برای شما در لیست زیر آماده کردیم که شما
          به یک قهوه اسپرسو عالی برسین. البته شما از دم آوری های دیگه هم میتونین
          برای این نوع قهوه ها استفاده کنید اما به دلیل کافئین بالا بهتره که به
          صورت اسپرسو تهیه بشن.
        </p>

        <p className="mt-10 text-lg leading-8 text-textGray">
          البته اگه شما صاحب کافه هستید، با خرید بیش از ۶ بسته یک کیلوگرمی
          میتونین از درصد های تخفیف حجم و نقد، دو درصد تا شش درصد استفاده کنید.
          تمام قهوه های ما دارای سیب سلامت هستند و شما با خیال راحت میتونید با
          از ما خرید قهوه رو انجام بدید.
        </p>
      </section>

      <Footer />
    </>
  );
}
