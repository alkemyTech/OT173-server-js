const httpCodes = require('../constants/constants');
const { Testimonial } = require('../models/index.js');

const updateTestimonial = async (req, res) => {
  const { name, image, content } = req.body;
  const { id } = req.params;

  try {
    const testimonial = await Testimonial.findByPk(id);

    if (!testimonial) {
      return res
        .status(httpCodes.NOT_FOUND)
        .json({ ok: false, msg: 'Testimonial not found' });
    }

    const updatedTestimonial = await testimonial.update({
      name,
      image,
      content,
    });

    return res
      .status(httpCodes.OK)
      .json({ ok: true, testimonial: updatedTestimonial.dataValues });
  } catch (err) {
    return res.status(httpCodes.BAD_REQUEST).json({ ok: false, error: err });
  }
};

const deleteTestimonial = async (req,res)=>{
  const { id } = req.params;
  try {
    const testimonial = await Testimonial.findByPk(id);
    if (!testimonial) {
      return res
        .status(httpCodes.NOT_FOUND)
        .json({ ok: false, msg: 'Testimonial not found' });
    }
    const deleteTestimonial = await testimonial.destroy()
    return res
      .status(httpCodes.OK)
      .json({ ok: true, testimonial: deleteTestimonial.dataValues });
  } catch (error) {
    return res.status(httpCodes.INTERNAL_SERVER_ERROR).json({
      ok: false,
      error,
    });
  }
}

module.exports = { updateTestimonial,deleteTestimonial };
