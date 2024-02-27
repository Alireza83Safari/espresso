import connectToDB from "@/libs/db";
import Product from "@/models/product";
import Category from "@/models/category";
import productValidator from "@/validator/server/product";
import { NextRequest, NextResponse } from "next/server";
import Comment from "@/models/comment";

async function handleOrder(order: any, skip: number, limit: number) {
  let productQuery;
  switch (order) {
    case "expensive":
      productQuery = await Product.find({}, "-__v")
        .sort({ price: -1 })
        .skip(skip)
        .limit(limit);
      break;
    case "cheap":
      productQuery = await Product.find({}, "-__v")
        .sort({ price: 1 })
        .skip(skip)
        .limit(limit);
      break;
    case "newset":
      productQuery = await Product.find({}, "-__v")
        .sort({ createdAt: 1 })
        .skip(skip)
        .limit(limit);
      break;
    case "oldest":
      productQuery = await Product.find({}, "-__v")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);
      break;
    case "mix":
      productQuery = await Product.find({ seed: "mix" }, "-__v")
        .skip(skip)
        .limit(limit);
      break;
    case "pure":
      productQuery = await Product.find({ seed: "pure" }, "-__v")
        .skip(skip)
        .limit(limit);
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
    console.log(validationResult);

    if (validationResult?.length) {
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
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || String(Product.length));
    const skip = (page - 1) * limit;

    let productQuery;

    switch (true) {
      case !!order:
        productQuery = await handleOrder(order, skip, limit);
        return NextResponse.json(productQuery);

      case !!q:
        productQuery = await Product.find({ name: { $regex: q } })
          .skip(skip)
          .limit(limit)
          .populate("category");
        return NextResponse.json(productQuery);

      default:
        const products = await Product.find({})
          .populate("category")
          .exec();

        return NextResponse.json(products);
    }
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در پردازش درخواست" },
      { status: 500 }
    );
  }
}
