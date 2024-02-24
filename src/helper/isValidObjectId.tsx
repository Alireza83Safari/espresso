import mongoose from "mongoose";
import { NextResponse } from "next/server";

const isValidObjectId = (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({
      message: "شناسه معتبر نیست",
      status: 422,
    });
  }
};

export default isValidObjectId;
