const Validator = require("fastest-validator");

const v = new Validator();

const categorySchema = {
  code: { type: "string", max: 30},
  name: { type: "string", max: 30 },
};

const categoryValidator = v.compile(categorySchema);

export default categoryValidator;
