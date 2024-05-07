import isValidObjectId from "@/helper/isValidObjectId";
import connectToDB from "@/libs/db";
import Coffee from "@/models/coffee";
import { NextRequest, NextResponse } from "next/server";
import Comment from "@/models/comment";
import Category from "@/models/category";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    await connectToDB();
    isValidObjectId(params?.id);
    const comment = await Comment.find({});
    const category = await Category.find({});

    const findCoffee = await Coffee.findById(params?.id)
      .populate("category")
      .populate({
        path: "comments",
        populate: {
          path: "user",
        },
      })
      .lean()
      .exec();
    if (findCoffee) {
      return NextResponse.json(findCoffee);
    } else {
      return NextResponse.json({ message: "قهوه یافت نشد!" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    await connectToDB();
    isValidObjectId(params?.id);

    const deleteCoffee = await Coffee.findByIdAndDelete(params?.id);
    if (deleteCoffee) {
      return NextResponse.json({ message: "حذف قهوه موفقیت آمیز بود" });
    } else {
      return NextResponse.json({ message: "قهوه یافت نشد!" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 },
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const data = await req.json();
    await connectToDB();
    isValidObjectId(params?.id);

    const editCoffee = await Coffee.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    if (editCoffee) {
      return NextResponse.json({ messgae: "ویرایش قهوه موفقیت آمیز بود" });
    } else {
      return NextResponse.json({ message: "قهوه یافت نشد!" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 },
    );
  }
}
