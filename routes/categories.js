const express = require('express');
const router = express.Router();
const {
    deleteCategory,
    getCategories,
    addCategory,
    setCategory
} = require('../controllers/categoriesControllers');
const validationCategory = require('../validations/validationCategory');

router.post('/', validationCategory, addCategory)
router.put('/:id', validationCategory, setCategory)
router.delete('/:id', deleteCategory);
router.get('/', getCategories);

module.exports = router;
