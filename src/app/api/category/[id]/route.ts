import isValidObjectId from "@/helper/isValidObjectId";
import connectToDB from "@/libs/db";
import Category from "@/models/category";
import categoryValidator from "@/validator/server/category";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();
    const data = await req.json();
    isValidObjectId(params?.id);

    const validationResult = categoryValidator(data);

    if (validationResult?.length) {
      return NextResponse.json({ message: validationResult }, { status: 422 });
    }

    const category = await Category.findByIdAndUpdate(params.id, data, {
      new: true,
    });

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

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();
    isValidObjectId(params?.id);

    const category = await Category.find({ _id: params.id });

    if (category) {
      return NextResponse.json(category);
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
    isValidObjectId(params?.id);

    const category = await Category.findByIdAndDelete(params.id);

    if (category) {
      return NextResponse.json(
        { message: "حذف دسته بندی موفقیت آمیز بود" },
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
