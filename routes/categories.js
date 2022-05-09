const express = require('express');
const router = express.Router();
const {
    deleteCategory,
    getCategories,
    addCategory
} = require('../controllers/categoriesControllers');
const validationCategory = require('../validations/validationCategory');

router.post('/',validationCategory, addCategory)
router.delete('/:id', deleteCategory);
router.get('/', getCategories);

module.exports = router;
