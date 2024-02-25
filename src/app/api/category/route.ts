import isValidObjectId from "@/helper/isValidObjectId";
import connectToDB from "@/libs/db";
import Category from "@/models/category";
import categoryValidator from "@/validator/server/category";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const data = await req.json();
    const validationResult = categoryValidator(data);

    if (validationResult?.length) {
      return NextResponse.json({ message: validationResult }, { status: 422 });
    }

    const category = await Category.create(data);

    if (category) {
      return NextResponse.json(
        { message: "ساخت دسته بندی موفقیت آمیز بود" },
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

export async function GET(req: NextRequest) {
  try {
    await connectToDB();
    const categories = await Category.find({}, "-__v");
    if (categories) {
      return NextResponse.json(categories);
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
