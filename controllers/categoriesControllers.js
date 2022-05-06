const { Categories } = require('../models/index.js');

const httpCodes = require('../constants/constants');

const getCategories = async function (req, res) {
  try {
    const categories = await Categories.findAll({
      attributes: ['name'],
    });

    if (!categories) {
      return res.status(httpCodes.NOT_FOUND).json({ msg: 'No categories' });
    }

    return res.json(categories);
  } catch (error) {
    res.status(httpCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
  }
};

module.exports = {
  getCategories,
};
