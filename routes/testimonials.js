const express = require("express");
const router = express.Router();
const {authRole} = require("../middlewares/authorizationMiddleware.js")
const {
  updateTestimonial,
  deleteTestimonial
} = require('../controllers/testimonialsControllers.js');
const httpCodes = require("../constants/constants.js");
const validationTestimonial = require("../validations/validationsTestimonial.js");
const {Testimonial} = require("../models/index.js");
const {updateTestimonial} = require('../controllers/testimonialsControllers.js');

router.post('/',validationTestimonial ,async function (req, res, next) {
    const {name, image, content} = req.body
    
    try {
        const newTestimonial = await Testimonial.create({name, image, content})        
        res.status(httpCodes.OK).json({error:false})
    } catch (error) {
        res.status(httpCodes.BAD_REQUEST).json({error:true,message:error.message || "Error al enviar el contacto"})
    }         
 
});

router.put('/:id', updateTestimonial);

router.delete('/:id',authRole,deleteTestimonial)

module.exports = router;
