import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green">
      <div className="grid lg:grid-cols-6 grid-cols-1 m-auto max-w-[1080px]">
        <div className="lg:col-span-4 my-6 text-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12952.79565199825!2d51.363374738490165!3d35.74591540565242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1708671111170!5m2!1sen!2s"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
            className="h-[18rem] md:w-[650px] w-[100vw]"
          ></iframe>
        </div>

        <div className="lg:col-span-2 my-6 text-white lg:mt-0 mt-80">
          <h2 className="text-2xl font-seribold">درباره ما</h2>
          <p className="mt-4 leading-8">
            اسپرسو گرام در سال 1402 با هدف بالابردن سطح خدمات ارائه شده در صنعت
            قهوه شروع به کار کرد. این شرکت در تلاش بوده که کافه داران و مشتریان
            خانگی قهوه رو با بهترین کیفیت و قیمت تهیه کنند. بالا بردن دانش عمومی
            قهوه هم یکی از اهداف ما بوده. سعی کردیم با ارائه این خدمات به جامعه
            قهوه ایران کمک شایانی کرده باشیم.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 grid-cols-1 col-span-6 text-white my-5">
          <div>
            <p className="mt-2 ml-2">آدرس:</p>
            <p className="mt-1 text-lg">تهران پارک پردیسان</p>
          </div>

          <div>
            <p className="mt-4 text-lg">شماره تماس جهت ثبت سفارش</p>
            <p className="mt-2 text-xl">0912121212</p>
          </div>

          <div>
            <p className="mt-4">پست الکترونیک</p>
            <p className="mt-1 text-lg">alireza83safarii@gmail.com</p>
          </div>
        </div>
      </div>
      <p className="text-center text-white py-3">
        تمام حقوق مادی و معنوی مربوط به قهوه گرام است
      </p>
    </footer>
  );
}
