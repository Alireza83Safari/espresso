import connectToDB from "@/libs/db";
import Address from "@/models/address";
import { isValidObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();
    if (!isValidObjectId(params?.id)) {
      return NextResponse.json({ messgae: "آی دی معتبر نیست" });
    }

    const address = await Address.find({ user: params?.id });
    if (address) {
      return NextResponse.json(address);
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();
    if (!isValidObjectId(params?.id)) {
      return NextResponse.json({ messgae: "آی دی معتبر نیست" });
    }

    const address = await Address.findByIdAndDelete(params.id);

    if (address) {
      return NextResponse.json(
        { message: "حذف آدرس موفقیت آمیز بود" },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
