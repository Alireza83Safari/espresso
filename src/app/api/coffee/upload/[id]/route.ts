import connectToDB from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import Coffee from "@/models/coffee";
import { isValidObjectId } from "mongoose";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    await connectToDB();

    const formData = await req.formData();

    const img = formData.get("img") as File | null;
    if (!img) {
      return NextResponse.json({
        message: "",
        status: 400,
      });
    }

    const buffer = Buffer.from(await img.arrayBuffer());
    const filename = Date.now() + img.name;
    const imgPath = path.join(process.cwd(), "/public/uploads/" + filename);

    await writeFile(imgPath, buffer);

    if (!isValidObjectId) {
      return NextResponse.json({
        message: "آیدی معتبر نیست",
        status: 400,
      });
    }
    const editCoffee = await Coffee.findByIdAndUpdate(
      params.id,
      { image: `https://espresso.liara.run/${filename}` },
      { new: true },
    );

    return NextResponse.json(editCoffee);
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 },
    );
  }
}
