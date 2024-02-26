import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 justify-center m-auto max-w-[1080px] overflow-hidden mt-8 lg:h-[8rem] gap-y-8 pb-4">
      <Link href="/high-caf" className="max-h-[3rem] max-w-[10rem] shadow-xl">
        <Image
          alt="coffee"
          src="/image/energy_1.WEBP"
          className="th-full w-full bg-cover bg-center transition-transform transform hover:scale-110"
          width={160}
          height={100}
        />
      </Link>

      <Link href="/low-caf" className="max-h-[3rem] max-w-[10rem] shadow-xl">
        <Image
          alt="coffee"
          src="/image/equipment_1.WEBP"
          className="th-full w-full bg-cover bg-center transition-transform transform hover:scale-110"
          width={160}
          height={100}
        />
      </Link>
      <Link href="/low-caf" className="max-h-[3rem] max-w-[10rem] shadow-xl">
        <Image
          alt="coffee"
          src="/image/fresh_1.WEBP"
          className="th-full w-full bg-cover bg-center transition-transform transform hover:scale-110"
          width={160}
          height={100}
        />
      </Link>
      <div className="max-h-[3rem] max-w-[10rem] shadow-xl">
        <Image
          alt="coffee"
          src="/image/student_1.WEBP"
          className="th-full w-full bg-cover bg-center transition-transform transform hover:scale-110"
          width={160}
          height={100}
        />
      </div>
      <div className="max-h-[3rem] max-w-[10rem] shadow-xl">
        <Image
          alt="coffee"
          src="/image/sport_1.WEBP"
          className="th-full w-full bg-cover bg-center transition-transform transform hover:scale-110"
          width={160}
          height={100}
        />
      </div>

      <div className="max-h-[3rem] max-w-[10rem] shadow-xl">
        <Image
          alt="coffee"
          src="/image/energy_1.WEBP"
          className="th-full w-full bg-cover bg-center transition-transform transform hover:scale-110"
          width={160}
          height={100}
        />
      </div>
    </div>
  );
};

export default page;
