import Spinner from "@/components/Spinner/Spinner";

export default function LoadingTemplate() {
  return (
    <div className="flex min-h-[24rem] items-center justify-center">
      <Spinner />
    </div>
  );
}
