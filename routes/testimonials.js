const express = require('express');
const router = express.Router();

const {
  editTestimonial,
} = require('../controllers/testimonialsControllers.js');

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.put('/:id', editTestimonial);

module.exports = router;
