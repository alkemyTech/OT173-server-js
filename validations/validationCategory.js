const { check } = require('express-validator');
const { validationErrors } = require('./validationResults');

const validationCategory = [
  check('name', 'Name must not be empty').not().isEmpty(),
  check('name', 'The name must be a string').isString(),  
  validationErrors,
];

module.exports = validationCategory;
