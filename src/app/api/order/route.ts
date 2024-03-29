import connectToDB from "@/libs/db";
import Order from "@/models/order";
import User from "@/models/user";
import Address from "@/models/address";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    const data = await req.json();

    /*  const validationResults = orderValidator(data);
    if (validationResults !== true) {
      return NextResponse.json({ message: validationResults }, { status: 422 });
    }*/

    if(data?.haveDiscount){
      
    }

    const order = new Order(data);

    await order.save();

    return NextResponse.json(
      { message: "ساخت سفارش موفقیت آمیز بود" },
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
    const address = await Address.find({});
    const user = await User.find({});
    const orders = await Order.find({}).populate("user").populate("address");
    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
