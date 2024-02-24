import connectToDB from "@/libs/db";
import Coffee from "@/models/coffee";
import coffeeValidator from "@/validator/server/coffee";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const data = await req.json();

    const validationResult = await coffeeValidator(data);

    if (validationResult?.length) {
      return NextResponse.json({ message: validationResult }, { status: 422 });
    }
    console.log(validationResult);

    const nameExist = await Coffee.find({ name: data?.name });

    if (!!nameExist?.length) {
      return NextResponse.json(
        { message: "نام از قبل وجود دارد" },
        { status: 409 }
      );
    }

    const createCoffee = await Coffee.create(data);

    if (createCoffee) {
      return NextResponse.json(
        { message: "قهوه با موفقیت ایجاد شد" },
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

export async function GET(req: NextRequest) {
  try {
    await connectToDB();

    const coffees = await Coffee.find({});
    if (coffees) {
      return NextResponse.json(coffees);
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
