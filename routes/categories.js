const express = require('express');
const router = express.Router();

const {
    deleteCategory,
    getCategories
} = require('../controllers/categoriesControllers');

router.delete('/:id', deleteCategory);
router.get('/', getCategories);

module.exports = router;
