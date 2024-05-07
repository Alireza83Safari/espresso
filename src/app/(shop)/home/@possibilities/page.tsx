import Image from "next/image";

const page = () => {
  return (
    <section className="my-20 bg-green">
      <div className="m-auto grid h-[13rem] max-w-[1080px] grid-cols-3 md:h-[17rem] md:grid-cols-4">
        <div className="flex items-center justify-center border-l border-dashed border-white">
          <div>
            <Image
              src="/image/Asset-1.WEBP"
              width={200}
              height={200}
              alt=""
              className="w-[100px] md:w-[170px]"
            />
            <p className="text-center text-white">پشتیبانی آنلاین</p>
          </div>
        </div>

        <div className="flex items-center justify-center border-l border-dashed border-white">
          <div>
            <Image
              src="/image/Asset-2.WEBP"
              width={200}
              height={200}
              alt=""
              className=" w-[100px] md:w-[170px]"
            />
            <p className="text-center text-white">پرداخت آنلاین</p>
          </div>
        </div>

        <div className="flex items-center justify-center md:border-l md:border-dashed md:border-white">
          <div>
            <Image
              src="/image/Asset-3.WEBP"
              width={200}
              height={200}
              alt=""
              className=" w-[100px] md:w-[170px]"
            />
            <p className="text-center text-white">ارسال رایگان</p>
          </div>
        </div>

        <div className="hidden items-center justify-center md:flex">
          <div>
            <Image
              src="/image/Asset-4.WEBP"
              width={200}
              height={200}
              alt=""
              className=" w-[100px] md:w-[170px]"
            />
            <p className="text-center text-white">خدمات عالی</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
