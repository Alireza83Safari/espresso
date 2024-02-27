const Validator = require("fastest-validator");

const v = new Validator();

const commentSchema = {
  body: { type: "string", max: 300 },
  rate: { type: "number", min: 1, max: 5 },
  product: { type: "string" },
  user: { type: "string" },
};

const commentValidator = v.compile(commentSchema);

export default commentValidator;
