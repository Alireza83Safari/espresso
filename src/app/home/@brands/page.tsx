import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function page() {
  return (
    <div className="m-auto max-w-[1080px] flex justify-center items-center gap-x-10 my-20">
      <div className="mx">
        <Image
          src="/image/bonmano.svg"
          width={120}
          height={120}
          alt=""
          className="sm:w-[120xp] w-[100px]"
        />
      </div>
      <div>
        <Image
          src="/image/starbox.WEBP"
          width={120}
          height={120}
          alt=""
          className="sm:w-[120xp] w-[100px]"
        />
      </div>
    </div>
  );
}
