import Validator from "fastest-validator";

const v = new Validator();

const orderSchema = {
  user: { type: "string", empty: false, min: 2 },
  address: { type: "string", empty: false, min: 2 },
  products: {
    type: "array",
    items: {
      type: "object",
      props: {
        products: { type: "string", empty: false },
      },
    },
  },
  totalPrice: { type: "number" },
};

const orderValidator = v.compile(orderSchema);

export default orderValidator;
