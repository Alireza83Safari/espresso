import connectToDB from "@/libs/db";
import Address from "@/models/address";
import Order from "@/models/order";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const address = await Address.find({});
    await connectToDB();

    const findUserOrders = await Order.find({ user: params?.userId }).populate(
      "address"
    );
    console.log("findUserOrders", findUserOrders);

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
