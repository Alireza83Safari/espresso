import connectToDB from "@/libs/db";
import Favorite from "@/models/favorite";
import Product from "@/models/product";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const data = await req.json();

    const isValidProduct = await Product.find({ _id: data?.product });
    if (!isValidProduct) {
      return NextResponse.json(
        { message: "محصول معتبر نمیباشد" },
        { status: 422 },
      );
    }

    const isExist = await Favorite.find({
      user: data?.user,
      product: data?.product,
    });

    if (isExist) {
      return NextResponse.json(
        { message: "محصول در علاقه مندی ها وجود دارد" },
        { status: 422 },
      );
    }

    const favorite = await Favorite.create(data);

    if (favorite) {
      return NextResponse.json({
        message: "افزودن به علاقه مندی ها با موفقیت انجام شد",
      });
    }
  } catch (error) {}
}
