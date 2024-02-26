import isValidObjectId from "@/helper/isValidObjectId";
import connectToDB from "@/libs/db";
import Product from "@/models/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();
    isValidObjectId(params?.id);

    const findProduct = await Product.findById(params?.id);
    if (findProduct) {
      return NextResponse.json(findProduct);
    } else {
      return NextResponse.json({ message: "قهوه یافت نشد!" }, { status: 404 });
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

    const deleteProduct = await Product.findByIdAndDelete(params?.id);
    if (deleteProduct) {
      return NextResponse.json({ message: "حذف قهوه موفقیت آمیز بود" });
    } else {
      return NextResponse.json({ message: "قهوه یافت نشد!" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = await req.json();
    await connectToDB();
    isValidObjectId(params?.id);

    const editProduct = await Product.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    if (editProduct) {
      return NextResponse.json({ messgae: "ویرایش قهوه موفقیت آمیز بود" });
    } else {
      return NextResponse.json({ message: "قهوه یافت نشد!" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
