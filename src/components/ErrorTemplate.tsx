"use client";

export default function ErrorTemplate({ reset }: any) {
  return (
    <div className="flex h-screen flex-col items-center justify-center font-sans">
      <h2 className="mb-6 text-2xl font-bold">اوه! مشکلی پیش آمد!</h2>
      <button
        className="focus:shadow-outline rounded bg-green px-4 py-2 font-bold text-white hover:bg-[#0A5B01] focus:outline-none"
        onClick={() => reset()}
      >
        دوباره امتحان کنید
      </button>
    </div>
  );
}
