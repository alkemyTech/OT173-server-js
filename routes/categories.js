const express = require('express');
const router = express.Router();

const { getCategories } = require('../controllers/categoriesControllers');

router.get('/', getCategories);

module.exports = router;
