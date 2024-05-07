import connectToDB from "@/libs/db";
import Discount from "@/models/discount";
import discountValidator from "@/validator/server/discount";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const data = await req.json();
    const validationResult = discountValidator(data);

    if (validationResult !== true) {
      return NextResponse.json({ message: validationResult }, { status: 422 });
    }

    const isCodeExist = await Discount.find({ code: data?.code });

    if (!!isCodeExist?.length) {
      return NextResponse.json(
        { message: "کد تخفیف وجود دارد" },
        { status: 403 },
      );
    }

    const createDiscount = await Discount.create(data);

    if (createDiscount) {
      return NextResponse.json(
        { message: "کد تخفیف با موفقیت ساخته شد" },
        { status: 200 },
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectToDB();
    const discounts = await Discount.find({}).populate("user").lean();
    return NextResponse.json(discounts);
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 },
    );
  }
}
