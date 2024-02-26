import connectToDB from "@/libs/db";
import Cart from "@/models/cart";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const { product, user } = await req.json();

    if (!product || !user) {
      return NextResponse.json(
        { error: "Product and user are required fields" },
        { status: 400 }
      );
    }

    const isExistCart = await Cart.find({ product, user });

    if (isExistCart.length > 0) {
      return NextResponse.json(
        { error: "Cart for the product and user already exists" },
        { status: 422 }
      );
    }

    const newProduct = new Cart({ product, user });
    await newProduct.save();

    return NextResponse.json(newProduct);
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
