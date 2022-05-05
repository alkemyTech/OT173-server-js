const express = require('express');
const router = express.Router();

const {
    deleteCategory
} = require('../controllers/categoriesControllers');

router.delete('/:id', deleteCategory);

module.exports = router;
