const express = require('express');
const router = express.Router();

const {
  updateTestimonial,
} = require('../controllers/testimonialsControllers.js');

router.put('/:id', updateTestimonial);

module.exports = router;
