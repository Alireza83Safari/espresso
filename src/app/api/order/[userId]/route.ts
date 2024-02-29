import isValidObjectId from "@/helper/isValidObjectId";
import connectToDB from "@/libs/db";
import Order from "@/models/order";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    await connectToDB();
    if (!isValidObjectId(params?.userId)) {
      return NextResponse.json({ messgae: "آی دی معتبر نیست" });
    }

    const findUserOrders = await Order.findById({ user: params?.userId });

    if (findUserOrders) {
      return NextResponse.json(findUserOrders);
    } else {
      return NextResponse.json({ message: "سفارش یافت نشد!" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
