import { AddressType } from "@/types/address";
import React from "react";
interface AddressListProps {
  address: AddressType[];
}

export const AddressList: React.FC<AddressListProps> = ({ address }) => {
  return (
    <div className="mb-8 md:mb-16">
      {address?.map((item) => (
        <div
          className="mx-4 mb-7 grid grid-cols-2 gap-y-5 rounded-lg border bg-gray-50 p-3 text-sm duration-300 hover:bg-white xs:text-base"
          key={item?._id}
        >
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
          <div className="col-span-2 flex">
            <p className="ml-2 text-textGray">آدرس:</p>
            <p>{item?.address}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
