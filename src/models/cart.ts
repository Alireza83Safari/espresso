import mongoose from "mongoose";

export const cartSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const Cart = mongoose.models?.Cart || mongoose.model("Cart", cartSchema);

export default Cart;
