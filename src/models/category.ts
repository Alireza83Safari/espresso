import mongoose from "mongoose";

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
