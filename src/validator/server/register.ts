const Validator = require("fastest-validator");

const v = new Validator();

const registerSchema = {
  username: { type: "string", min: "2", max: "20" },
  firstname: { type: "string", min: 2, max: 20 },
  lastname: { type: "string", min: 2, max: 20 },
  role: { type: "string" },
};

const registerValidator = v.compile(registerSchema);

export default registerValidator;
