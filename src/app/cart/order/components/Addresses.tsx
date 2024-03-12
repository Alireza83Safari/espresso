import React from "react";
import { deleteAddress } from "@/actions/deleteAddress";
import { FaX } from "react-icons/fa6";
import CreateAddress from "@/app/my-account/address/components/CreateAddress";
import { AddressType } from "@/types/address";

type AddressesProps = {
  chooseAddress: string;
  setChooseAddress: any;
  address: AddressType[];
};

const Addresses: React.FC<AddressesProps> = ({
  chooseAddress,
  setChooseAddress,
  address,
}) => {
  return (
    <div className="col-span-3">
      {!!address?.length ? (
        address?.map((item) => (
          <div
            className={`relative mb-7 mt-5 grid grid-cols-2 gap-y-5 rounded-lg border p-2 text-sm duration-300 hover:bg-gray-50 sm:ml-4 sm:mt-0 sm:text-base ${
              chooseAddress === item?._id && "border-2 border-green"
            }`}
            onClick={() => setChooseAddress(item?._id)}
          >
            <button
              className="absolute left-1 top-1 text-red-500"
              onClick={() => deleteAddress(item?._id)}
            >
              <FaX />
            </button>
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
        ))
      ) : (
        <div className="mt-12">
          <CreateAddress />
        </div>
      )}
    </div>
  );
};

export default Addresses;
