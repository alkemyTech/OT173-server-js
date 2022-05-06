const express = require('express');
const router = express.Router();
const {authRole} = require("../middlewares/authorizationMiddleware.js")
const {
  updateTestimonial,
  deleteTestimonial
} = require('../controllers/testimonialsControllers.js');

router.put('/:id', updateTestimonial);

router.delete('/:id',authRole,deleteTestimonial)

module.exports = router;
