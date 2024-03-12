import mongoose from "mongoose";

export const schema = new mongoose.Schema(
  {
    percent: {
      type: Number,
      required: true,
    },

    code: {
      type: String,
      required: true,
    },

    count: {
      type: Number,
      required: true,
      default: 0,
    },

    use: {
      type: Number,
      default: 0,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

const Discount = mongoose.models.Discount || mongoose.model("Discount", schema);

export default Discount;
