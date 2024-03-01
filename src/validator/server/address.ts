import Validator from "fastest-validator";

const v = new Validator();

const addressSchema = {
  firstname: { type: "string", max: 20 },
  lastname: { type: "string", max: 20 },
  plaque: { type: "number" },
  address: { type: "string", max: 300 },
  phone: { type: "number" },
};

const addressValidator = v.compile(addressSchema);

export default addressValidator;
