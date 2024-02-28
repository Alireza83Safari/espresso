import Image from "next/image";

const page = () => {
  return (
    <div className="my-20 bg-green">
      <div className="grid md:grid-cols-4 grid-cols-3 md:h-[17rem] h-[13rem] m-auto max-w-[1080px]">
        <div className="border-l border-dashed border-white flex justify-center items-center">
          <div>
            <Image
              src="/image/Asset-1.WEBP"
              width={200}
              height={200}
              alt=""
              className=" md:w-[170px] w-[100px]"
            />
            <p className="text-center text-white">پشتیبانی آنلاین</p>
          </div>
        </div>

        <div className="border-l border-dashed border-white flex justify-center items-center">
          <div>
            <Image
              src="/image/Asset-2.WEBP"
              width={200}
              height={200}
              alt=""
              className=" md:w-[170px] w-[100px]"
            />
            <p className="text-center text-white">پرداخت آنلاین</p>
          </div>
        </div>

        <div className="md:border-l md:border-dashed md:border-white flex justify-center items-center">
          <div>
            <Image
              src="/image/Asset-3.WEBP"
              width={200}
              height={200}
              alt=""
              className=" md:w-[170px] w-[100px]"
            />
            <p className="text-center text-white">ارسال رایگان</p>
          </div>
        </div>

        <div className="md:flex hidden justify-center items-center">
          <div>
            <Image
              src="/image/Asset-4.WEBP"
              width={200}
              height={200}
              alt=""
              className=" md:w-[170px] w-[100px]"
            />
            <p className="text-center text-white">خدمات عالی</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
