const express = require('express');
const router = express.Router();

const {
  updateTestimonial,
} = require('../controllers/testimonialsControllers.js');

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.put('/:id', updateTestimonial);

module.exports = router;
