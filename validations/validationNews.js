const { check } = require('express-validator');
const { validationErrors } = require('./validationResults');

const NEWS_ERROR_MESSAGES = {
  NAME_REQUIRED: 'La novedad necesita tener un título',
  CONTENT_REQUIRED: 'La novedad necesita tener contenido',
  IMAGE_REQUIRED: 'La novedad necesita tener una imagen',
  IMAGE_TYPE: 'La imagen debe ser un archivo .png, .jpg o .jpeg',
  CATEGORY_REQUIRED: 'La novedad necesita una categoría',
};

const validateNews = [
  check('name').notEmpty().withMessage(NEWS_ERROR_MESSAGES.NAME_REQUIRED),
  check('content').notEmpty().withMessage(NEWS_ERROR_MESSAGES.CONTENT_REQUIRED),
  check('image').notEmpty().withMessage(NEWS_ERROR_MESSAGES.IMAGE_REQUIRED),
  check('category')
    .notEmpty()
    .withMessage(NEWS_ERROR_MESSAGES.CATEGORY_REQUIRED),
  validationErrors,
];

module.exports = { validateNews };
