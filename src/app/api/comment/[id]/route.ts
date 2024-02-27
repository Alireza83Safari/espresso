import isValidObjectId from "@/helper/isValidObjectId";
import connectToDB from "@/libs/db";
import Comment from "@/models/comment";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();
    isValidObjectId(params?.id);

    const comment = await Comment.findByIdAndDelete(params.id);

    if (comment) {
      return NextResponse.json(
        { message: "حذف نظر موفقیت آمیز بود" },
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
