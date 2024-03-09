const mongoose = require("mongoose");
const Product = require("../models/product");

export const schema = mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "accept", "reject"],
      required: true,
    },

    rate: {
      type: Number,
      required: true,
    },

    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.models.Comment || mongoose.model("Comment", schema);
export default Comment;
