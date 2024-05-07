import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function page() {
  return (
    <section className="m-auto my-20 flex max-w-[1080px] items-center justify-center gap-x-10">
      <div className="mx">
        <Image
          src="/image/bonmano.svg"
          width={120}
          height={120}
          alt=""
          className="w-[100px] sm:w-[120xp]"
        />
      </div>
      <div>
        <Image
          src="/image/starbox.WEBP"
          width={120}
          height={120}
          alt=""
          className="w-[100px] sm:w-[120xp]"
        />
      </div>
    </section>
  );
}
