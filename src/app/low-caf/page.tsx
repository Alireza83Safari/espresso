import ProductSlider from "@/components/ProductSlider";
import Image from "next/image";
import React from "react";
import { getProducts } from "../actions/getProducts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default async function page() {
  const coffees = await getProducts();
  return (
    <>
      <Header />

      <div className="m-auto max-w-[1080px] my-16 mt-24">
        <Image
          src="/image/man-drinking-high-caff-coffee.webp"
          width={500}
          height={500}
          alt=""
          className="min-w-full object-contain"
        />
        <p className="mt-10 text-sm leading-7 text-textGray">
          معمولا شما برای ورزش نیاز به انرژی بالایی دارید. ورزش برای هر شخص معنی
          خاصی داره. گاهی اوقات شما برای تفریح و علاقه ورزش میکنید و گاهی اوقات
          افراد به صورت جدی، به فعالیت در اون رشته میپردازند. اینکه ما به شما یک
          قهوه به خصوص پیشنهاد کنیم ممکن نیست. به این دلیل که بسته به میزان
          فعالیت شما، باید میزان کافئین مورد انتظارتون رو مشخص کنید.
        </p>
        <h2 className="text-lg mt-10">
          اما سوال اصلی اینجاست که آیا قهوه واقعا به شما در ورزش کردن کمک میکنه؟
        </h2>
        <p className="mt-4 text-sm leading-7 text-textGray">
          قهوه به دلیل بالا بردن متابولیسم میتونه روند سوختن چربی و انرژی بدن رو
          افزایش بده. این افزایش باعث میشه خون بیشتری سمت ماهیچه های شما بره و
          این میزان شادابی شما رو هنگام ورزش افزایش میده. افزایش فشار خون و
          انرژی باعث میشه روند کاهش وزن شما هم افزایش پیدا کنه و روند لاغری شما
          افزایش پیدا کنه.
        </p>

        <h2 className="text-lg mt-10">خب چطوری بفهمیم چه قهوه برای ورزش مناسبه؟</h1>
        <p className="mt-10 text-sm leading-7 text-textGray">
          قهوه های مناسب ورزش معمولا کافئین متوسط رو به بالایی دارند و شما با
          خوردن اون ها احساس سر زندگی میکنید. اما پیدا کردن قهوه مناسب برای
          خودتون ممکنه یکم دشوار باشه. باید قهوه های مختلفی رو تست کنید تا به
          سلیقه مورد نظر خودتون برسید.
        </p>
        <ProductSlider title="" products={coffees} />

        <h2 className="text-lg mt-10 text-red-500">یک هشدار نه دو تا هشدار</h2>
        <p className="mt-10 text-sm leading-7 text-textGray">
          هشدار اول ما به شما اینکه قهوه قبل از خواب استفاده نکنید ممکنه مشکلات
          جدی برای شما مثل توهم به وجود بیاره و روز بعدی شما رو هم تحت تاثیر
          قرار بده. بهترین زمان برای استفاده قهوه عصر و قبل از باشگاهه. این مدت
          بهتره که ۴۵ دقیقه قبل از رفتن یا پرداختن به اون ورزش باشه.
        </p>
        <p className="mt-10 text-sm leading-7 text-textGray">
          هشدار دوم اینکه در استفاده کافئین زیاده روی نکنید. کافئین زیاد باعث
          مشکلات قلبی و مشکلاتی مانند توهم میشه. کافئین بالاتر به معنی بهتر بودن
          هیچ قهوه ای نیست. پس در انتخاب یک قهوه خوب همیشه دقت کنید.
        </p>
      </div>

      <Footer />
    </>
  );
}


