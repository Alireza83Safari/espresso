import mongoose from "mongoose";

export const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    seed: {
      type: String,
      enum: ["mix", "pure", "powdery"],
      required: true,
    },
    seedType: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    caffeine: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

productSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "product",
});

const Product =
  mongoose.models?.Product || mongoose.model("Product", productSchema);

export default Product;
