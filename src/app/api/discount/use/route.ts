import connectToDB from "@/libs/db";
import Discount from "@/models/discount";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  try {
    await connectToDB();
    const { code } = await req.json();

    const discount = await Discount.findOne({ code });

    if (!discount) {
      return Response.json({ message: "تخفیف یافت نشد" }, { status: 404 });
    }

    if (discount.use + 1 > discount.count) {
      return Response.json(
        { message: "کد تخفیف به اتمام رسیده است" },
        { status: 422 },
      );
    }

    await Discount.findOneAndUpdate(
      { code },
      {
        $inc: {
          use: 1,
        },
      },
    );

    return Response.json(discount);
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 },
    );
  }
}
