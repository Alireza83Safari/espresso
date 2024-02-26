import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="grid xs:grid-cols-2 m-auto max-w-[1080px] my-16">
      <Link
        href="/product?order=newset"
        className="transition-transform transform-gpu hover:scale-110 duration-1000 relative"
      >
        <Image
          src="/image/sub-banner-1.WEBP"
          width={200}
          height={73}
          alt=""
          className="w-full max-h-[73px]"
        />
      </Link>
      <Link
        href="/product?q=syrup"
        className="transition-transform transform-gpu hover:scale-110 duration-1000 relative"
      >
        <Image
          src="/image/sub-banner-2.WEBP"
          width={200}
          height={73}
          alt=""
          className="w-full max-h-[73px]"
        />
      </Link>
    </div>
  );
};

export default page;
