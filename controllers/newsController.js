const { check, validationResult } = require('express-validator');

const db = require('../models');
const Entries = require('../models/entries');
const httpCodes = require('../constants/constants');

const DataTypes = db.Sequelize.DataTypes;

const NEWS_ERROR_MESSAGES = {
  TITLE_REQUIRED: 'La novedad necesita tener un título',
  CONTENT_REQUIRED: 'La novedad necesita tener contenido',
  IMAGE_REQUIRED: 'La novedad necesita tener una imagen',
  IMAGE_TYPE: 'La imagen debe ser un archivo .png, .jpg o .jpeg',
  CATEGORY_REQUIRED: 'La novedad necesita una categoría',
};

const postNews = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(httpCodes.BAD_REQUEST).json({
      ok: false,
      errors: errors.array(),
    });
  }

  const categoryId = 1;

  const newsToInsert = {
    title: req.body.title,
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

const validateNews = [
  check('title').notEmpty().withMessage(NEWS_ERROR_MESSAGES.TITLE_REQUIRED),
  check('content').notEmpty().withMessage(NEWS_ERROR_MESSAGES.CONTENT_REQUIRED),
  check('image').notEmpty().withMessage(NEWS_ERROR_MESSAGES.IMAGE_REQUIRED),
  check('category')
    .notEmpty()
    .withMessage(NEWS_ERROR_MESSAGES.CATEGORY_REQUIRED),
];

module.exports = {
  postNews,
  validateNews,
};
