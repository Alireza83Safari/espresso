const mongoose = require("mongoose");

export const schema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },

    lastname: {
      type: String,
      required: true,
    },

    plaque: {
      type: Number,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    phone: {
      type: Number,
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

const Address = mongoose.models.Address || mongoose.model("Address", schema);
export default Address;
