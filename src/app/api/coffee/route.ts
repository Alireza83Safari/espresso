import connectToDB from "@/libs/db";
import Coffee from "@/models/coffee";
import Category from "@/models/category";
import coffeeValidator from "@/validator/server/coffee";
import { NextRequest, NextResponse } from "next/server";

async function handleOrder(order: any, skip: number, limit: number) {
  let carQuery;
  switch (order) {
    case "expensive":
      carQuery = await Coffee.find({}, "-__v")
        .sort({ price: -1 })
        .skip(skip)
        .limit(limit);
      break;
    case "cheap":
      carQuery = await Coffee.find({}, "-__v")
        .sort({ price: 1 })
        .skip(skip)
        .limit(limit);
      break;
    case "newset":
      carQuery = await Coffee.find({}, "-__v")
        .sort({ createdAt: 1 })
        .skip(skip)
        .limit(limit);
      break;
    case "oldest":
      carQuery = await Coffee.find({}, "-__v")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);
      break;
    case "mix":
      carQuery = await Coffee.find({ seed: "mix" }, "-__v")
        .skip(skip)
        .limit(limit);
      break;
    case "pure":
      carQuery = await Coffee.find({ seed: "pure" }, "-__v")
        .skip(skip)
        .limit(limit);
      break;

    default:
      return NextResponse.json(
        { message: "Invalid order parameter" },
        { status: 404 }
      );
  }
  return carQuery;
}

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const data = await req.json();

    const validationResult = await coffeeValidator(data);
    console.log(validationResult);

    if (validationResult?.length) {
      return NextResponse.json({ message: validationResult }, { status: 422 });
    }

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
    const cate = await Category.find();

    const { searchParams } = new URL(req.url);

    const order = searchParams.get("order");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || String(Coffee.length));
    const skip = (page - 1) * limit;

    let carQuery;
    switch (true) {
      case !!order:
        carQuery = await handleOrder(order, skip, limit);
        return NextResponse.json(carQuery);

      default:
        const coffees = await Coffee.find({}).populate("category").exec();
        return NextResponse.json(coffees);
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
