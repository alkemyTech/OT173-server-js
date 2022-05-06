const { check } = require("express-validator");
const { validationErrors } = require("./validationResults");

const validationContact = [
    check("name","Name is Empty").not().isEmpty(),
    check("email", "Email is Empty").not().isEmpty(),
    check("email", "Invalid Email").isEmail(),
    validationErrors,
  ];
  
  module.exports = validationContact;