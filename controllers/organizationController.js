const httpCodes = require('../constants/constants.js');
const { Organizations } = require('../models/index.js');

const updateOrg = async (req, res) => {
  const {
    name,
    image,
    phone,
    address,
    welcomeText,
    facebook,
    linkedin,
    instagram,
  } = req.body;
  const { id } = req.params;
  
  try {
    const response = await Organizations.findByPk(id);

    if (!response) {
      return res
        .status(httpCodes.NOT_FOUND)
        .json({ ok: false, msg: 'Organization does not exist' });
    }

    const updatedOrg = await response.update({
      name,
      image,
      phone,
      address,
      welcomeText,
      facebook,
      linkedin,
      instagram,
    });

    return res
      .status(httpCodes.OK)
      .json({ ok: true, msg: 'Updated successfully completed', response: updatedOrg.values });
  } catch (err) {
    return res.status(httpCodes.BAD_REQUEST).json({ ok: false, error: err });
  }
};

module.exports = {
  updateOrg,
};
