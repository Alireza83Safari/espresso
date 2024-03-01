import { AddressType } from "@/types/address";
import React from "react";
interface AddressListProps {
  address: AddressType[];
}

export const AddressList: React.FC<AddressListProps> = ({ address }) => {
  return (
    <div className="mb-16">
      {address?.map((item) => (
        <div className="grid grid-cols-2 border p-3 gap-y-5 mb-7 rounded-lg mx-4 bg-gray-50 hover:bg-white duration-300">
          <div className="flex">
            <p className="ml-2 text-textGray">نام:</p>
            <p>{item?.firstname}</p>
          </div>
          <div className="flex">
            <p className="ml-2 text-textGray">نام خانوادگی:</p>
            <p>{item?.lastname}</p>
          </div>
          <div className="flex">
            <p className="ml-2 text-textGray">پلاک:</p>
            <p>{item?.plaque}</p>
          </div>
          <div className="flex">
            <p className="ml-2 text-textGray">شهر:</p>
            <p>{item?.city}</p>
          </div>
          <div className="flex">
            <p className="ml-2 text-textGray">شماره:</p>
            <p>{item?.phone}</p>
          </div>
          <div className="flex col-span-2">
            <p className="ml-2 text-textGray">آدرس:</p>
            <p>{item?.address}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
