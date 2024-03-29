// ImageUploader.tsx
import React, { useState, ChangeEvent } from "react";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa";

interface ImageUploaderProps {
  productId: string;
  setProductId: any;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  productId,
  setProductId,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    const fromdata = new FormData();
    fromdata.append("img", file!);
    setSelectedFile(file);
    if (file) {
      const res = await fetch(`/api/product/upload/${productId}`, {
        method: "POST",
        body: fromdata,
      });
      if (res.status === 200) {
        setProductId("");
        toast.success("ساخت کالا موفقیت آمیز بود");
      }
      console.log(res);
    }
  };

  return (
    <div className="mx-2 mb-12 gap-y-6 rounded-lg bg-slate-100 p-2 shadow-lg sm:mx-10 sm:gap-x-3 sm:p-4 lg:gap-x-7">
      <input
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={handleFileChange}
        id="image-upload"
      />
      <label
        htmlFor="image-upload"
        className="block h-full w-full cursor-pointer border-2 border-dashed border-gray-300 p-6 transition duration-300 hover:border-blue-500"
      >
        {selectedFile ? (
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Uploaded"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center">
            <FaPlus className="h-8 w-8 text-gray-500" />
            <span className="mt-1 text-sm text-gray-500">Upload Image</span>
          </div>
        )}
      </label>
    </div>
  );
};

export default ImageUploader;
