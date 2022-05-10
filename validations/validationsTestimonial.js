const { check } = require('express-validator');
const { validationErrors } = require('./validationResults');

const validationTestimonial = [
  check('name', 'Name is Empty').not().isEmpty(),
  check('content', 'Content is Empty').not().isEmpty(),
  validationErrors,
];

module.exports = validationTestimonial;
