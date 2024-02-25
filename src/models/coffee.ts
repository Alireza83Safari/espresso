import mongoose from "mongoose";

export const coffeeSchema = new mongoose.Schema(
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

const Coffee =
  mongoose.models?.Coffee || mongoose.model("Coffee", coffeeSchema);

export default Coffee;
