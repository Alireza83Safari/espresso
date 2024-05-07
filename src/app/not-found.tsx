import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="textt-3xl md:text-5xl">صفحه یافت نشد</h1>
      <Link href="/home" className="mt-10 text-xl underline">
        برگشت به خانه
      </Link>
    </div>
  );
}
