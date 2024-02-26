const Validator = require("fastest-validator");

const v = new Validator();

const productSchema = {
  name: { type: "string", min: 2, max: 200, unique: true },
  price: { type: "number" },
  seed: { type: "string", min: 2, max: 200, enum: ["powdery", "mix", "pure"] },
  seedType: { type: "string", min: 2, max: 200 },
  image: { type: "string" },
  label: { type: "string", min: 2, max: 200 },
  description: { type: "string", min: 2, max: 1000 },
  caffeine: { type: "string", min: 2, max: 200 },
  weight: { type: "number" },
};

const productValidator = v.compile(productSchema);

export default productValidator;
