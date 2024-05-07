import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <section className="m-auto mt-8 grid max-w-[1080px] grid-cols-2 justify-center gap-y-8 overflow-hidden sm:grid-cols-4 lg:h-[5rem] lg:grid-cols-6">
      <Link href="/high-caf" className="max-h-[3rem] max-w-[10rem] shadow-xl">
        <Image
          alt="coffee"
          src="/image/energy_1.WEBP"
          className="w-full transform bg-cover bg-center transition-transform duration-500 hover:scale-110"
          width={160}
          height={100}
        />
      </Link>

      <Link href="/low-caf" className="max-h-[3rem] max-w-[10rem] shadow-xl">
        <Image
          alt="coffee"
          src="/image/fresh_1.WEBP"
          className="w-full transform bg-cover bg-center transition-transform duration-500 hover:scale-110"
          width={160}
          height={100}
        />
      </Link>
      <Link
        href="/coffee?q=باکسونت"
        className="max-h-[3rem] max-w-[10rem] shadow-xl"
      >
        <Image
          alt="coffee"
          src="/image/student_1.WEBP"
          className="w-full transform bg-cover bg-center transition-transform duration-500 hover:scale-110"
          width={160}
          height={100}
        />
      </Link>
      <Link
        href="/coffee?q=باکسونت"
        className="max-h-[3rem] max-w-[10rem] shadow-xl"
      >
        <Image
          alt="coffee"
          src="/image/sport_1.WEBP"
          className="w-full transform bg-cover bg-center transition-transform duration-500 hover:scale-110"
          width={160}
          height={100}
        />
      </Link>

      <Link href="/low-caf" className="max-h-[3rem] max-w-[10rem] shadow-xl">
        <Image
          alt="coffee"
          src="/image/equipment_1.WEBP"
          className="w-full transform bg-cover bg-center transition-transform duration-500 hover:scale-110"
          width={160}
          height={100}
        />
      </Link>

      <Link
        href="/coffee?q=باکسونت"
        className="max-h-[3rem] max-w-[10rem] shadow-xl"
      >
        <Image
          alt="coffee"
          src="/image/energy_1.WEBP"
          className="w-full transform bg-cover bg-center transition-transform duration-500 hover:scale-110"
          width={160}
          height={100}
        />
      </Link>
    </section>
  );
}
