import connectToDB from "@/libs/db";
import Product from "@/models/product";
import Category from "@/models/category";
import productValidator from "@/validator/server/product";
import { NextRequest, NextResponse } from "next/server";
import Comment from "@/models/comment";

async function handleOrder(order: any) {
  let productQuery;
  switch (order) {
    case "expensive":
      productQuery = await Product.find({}, "-__v").sort({ price: -1 });
      break;
    case "cheap":
      productQuery = await Product.find({}, "-__v").sort({ price: 1 });
      break;
    case "newset":
      productQuery = await Product.find({}, "-__v").sort({ createdAt: 1 });
      break;
    case "oldest":
      productQuery = await Product.find({}, "-__v").sort({ createdAt: -1 });
      break;
    case "mix":
      productQuery = await Product.find({ seed: "mix" }, "-__v");
      break;
    case "pure":
      productQuery = await Product.find({ seed: "pure" }, "-__v");
      break;

    default:
      return NextResponse.json(
        { message: "Invalid order parameter" },
        { status: 404 }
      );
  }
  return productQuery;
}

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const data = await req.json();

    const validationResult = await productValidator(data);

    if (validationResult !== true) {
      return NextResponse.json({ message: validationResult }, { status: 422 });
    }

    const nameExist = await Product.find({ name: data?.name });

    if (!!nameExist?.length) {
      return NextResponse.json(
        { message: "نام از قبل وجود دارد" },
        { status: 409 }
      );
    }

    const createProduct = await Product.create(data);

    if (createProduct) {
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
    const category = await Category.find();

    const { searchParams } = new URL(req.url);

    const order = searchParams.get("order");
    const q = searchParams.get("q");

    let productQuery;

    switch (true) {
      case !!order:
        productQuery = await handleOrder(order);
        return NextResponse.json(productQuery);

      case !!q:
        productQuery = await Product.find({ name: { $regex: q } }).populate(
          "category"
        );
        return NextResponse.json(productQuery);

      default:
        const products = await Product.find({}).populate("category").exec();

        return NextResponse.json(products);
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
