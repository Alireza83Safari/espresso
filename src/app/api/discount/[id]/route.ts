import connectToDB from "@/libs/db";
import Discount from "@/models/discount";
import { isValidObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    await connectToDB();

    if (!isValidObjectId(params.id)) {
      return NextResponse.json({
        messgae: "آی دی معتبر نیست",
        status: 400,
      });
    }

    const deleteDiscount = await Discount.findByIdAndDelete(params.id);

    if (deleteDiscount) {
      return NextResponse.json({
        message: "تخفیف با موفقیت حذف شد",
        status: 200,
      });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 },
    );
  }
}
