import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="m-auto my-16 grid max-w-[1080px] xs:grid-cols-2">
      <Link
        href="/product?order=newset"
        className="relative transform-gpu transition-transform duration-1000 hover:scale-110"
      >
        <Image
          src="/image/sub-banner-1.WEBP"
          width={200}
          height={73}
          alt=""
          className="max-h-[73px] w-full"
        />
      </Link>
      <Link
        href="/product?q=syrup"
        className="relative transform-gpu transition-transform duration-1000 hover:scale-110"
      >
        <Image
          src="/image/sub-banner-2.WEBP"
          width={200}
          height={73}
          alt=""
          className="max-h-[73px] w-full"
        />
      </Link>
    </section>
  );
};

export default page;
