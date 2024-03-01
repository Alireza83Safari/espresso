import connectToDB from "@/libs/db";
import Address from "@/models/address";
import addressValidator from "@/validator/server/address";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const data = await req.json();

    const validationResult = addressValidator(data);

    if (validationResult !== true) {
      return NextResponse.json({ message: validationResult }, { status: 422 });
    }

    const createProduct = await Address.create(data);

    if (createProduct) {
      return NextResponse.json(
        { message: "آدرس با موفقیت ایجاد شد" },
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
