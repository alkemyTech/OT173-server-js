const { Router } = require('express');
const { getNewsById, createNews } = require('../controllers/newsControllers');
const router = Router();

router.get('/:id', getNewsById);
router.post('/', createNews);

module.exports = router;