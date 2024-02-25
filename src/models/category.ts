import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

export const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Category =
  mongoose.models?.Category || mongoose.model("Category", categorySchema);

export default Category;
