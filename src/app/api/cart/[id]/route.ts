import connectToDB from "@/libs/db";
import Cart from "@/models/cart";
import Product from "@/models/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: String } }
) {
  try {
    await connectToDB();
    const product = await Product.find({});
    const cartItem = await Cart.find({ user: params?.id }).populate("product");

    return NextResponse.json(cartItem);
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: String } }
) {
  try {
    await connectToDB();

    const cartItem = await Cart.findByIdAndDelete(params?.id);
    return NextResponse.json(cartItem);
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
