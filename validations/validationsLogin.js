const { check } = require("express-validator");
const { validationErrors } = require("./validationResults");

const validationLogin = [
  check("email", "Invalid email format").isEmail(),
  check("password", "Must be at least 6 chars long").isLength({ min: 6 }),
  validationErrors,
];

module.exports = validationLogin;