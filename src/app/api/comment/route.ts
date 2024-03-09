import connectToDB from "@/libs/db";
import Comment from "@/models/comment";
import commentValidator from "@/validator/server/comment";
import { NextRequest, NextResponse } from "next/server";
import Product from "@/models/product";
import User from "@/models/user";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const user = await User.find({});
    const product = await Product.find({});
    const data = await req.json();

    const validationResult = commentValidator(data);

    if (validationResult !== true) {
      return NextResponse.json({ message: validationResult }, { status: 422 });
    }

    await Comment.create({ ...data, status: "pending" });
    return NextResponse.json(
      { message: "ساخت کامنت موفقیت آمیز بود" },
      { status: 200 }
    );
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
    const comments = await Comment.find({}, "-__v")
      .populate("product")
      .populate("user");
    return NextResponse.json(comments);
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
