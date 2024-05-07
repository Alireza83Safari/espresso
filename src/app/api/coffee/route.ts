import connectToDB from "@/libs/db";
import Coffee from "@/models/coffee";
import Category from "@/models/category";
import coffeeValidator from "@/validator/server/coffee";
import { NextRequest, NextResponse } from "next/server";
import Comment from "@/models/comment";

async function handleOrder(order: any) {
  let coffeeQuery;
  switch (order) {
    case "expensive":
      coffeeQuery = await Coffee.find({}, "-__v").sort({ price: -1 });
      break;
    case "cheap":
      coffeeQuery = await Coffee.find({}, "-__v").sort({ price: 1 });
      break;
    case "newset":
      coffeeQuery = await Coffee.find({}, "-__v").sort({ createdAt: 1 });
      break;
    case "oldest":
      coffeeQuery = await Coffee.find({}, "-__v").sort({ createdAt: -1 });
      break;
    case "mix":
      coffeeQuery = await Coffee.find({ seed: "mix" }, "-__v");
      break;
    case "pure":
      coffeeQuery = await Coffee.find({ seed: "pure" }, "-__v");
      break;

    default:
      return NextResponse.json(
        { message: "Invalid order parameter" },
        { status: 404 },
      );
  }
  return coffeeQuery;
}

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const data = await req.json();

    const validationResult = await coffeeValidator(data);

    if (validationResult !== true) {
      return NextResponse.json({ message: validationResult }, { status: 422 });
    }

    const nameExist = await Coffee.find({ name: data?.name });

    if (!!nameExist?.length) {
      return NextResponse.json(
        { message: "نام از قبل وجود دارد" },
        { status: 409 },
      );
    }

    const createCoffee = await Coffee.create(data);

    if (createCoffee) {
      return NextResponse.json(
        { message: "قهوه با موفقیت ایجاد شد", data: createCoffee },
        { status: 200 },
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectToDB();
    const category = await Category.find();

    const { searchParams } = new URL(req.url);

    const order = searchParams.get("order");
    const q = searchParams.get("q");

    let coffeeQuery;

    switch (true) {
      case !!order:
        coffeeQuery = await handleOrder(order);
        return NextResponse.json(coffeeQuery);

      case !!q:
        coffeeQuery = await Coffee.find({ name: { $regex: q } }).populate(
          "category",
        );
        return NextResponse.json(coffeeQuery);

      default:
        const coffees = await Coffee.find({}).populate("category").exec();

        return NextResponse.json(coffees);
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 },
    );
  }
}
