import Validator from "fastest-validator";

const v = new Validator();

const discountSchema = {
  code: { type: "string" },
  percent: { type: "number" },
  count: { type: "number" },
  user: { type: "string" },
};

const discountValidator = v.compile(discountSchema);

export default discountValidator;
