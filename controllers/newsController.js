const db = require('../models');
const Entries = require('../models/entries');
const httpCodes = require('../constants/constants');

const DataTypes = db.Sequelize.DataTypes;

const postNews = async (req, res) => {
  const categoryId = 1;

  const newsToInsert = {
    name: req.body.name,
    content: req.body.content,
    image: req.body.image,
    type: 'news',
    categoryId,
  };

  try {
    const insertedNews = await Entries(db.sequelize, DataTypes).create(
      newsToInsert
    );

    return res.status(httpCodes.OK).json({
      ok: true,
      message: 'News created successfully',
      news: insertedNews,
    });
  } catch (error) {
    return res.status(httpCodes.INTERNAL_SERVER_ERROR).json({
      ok: false,
      error,
    });
  }
};

module.exports = {
  postNews,
};
