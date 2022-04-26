const express = require('express');
const router = express.Router();

const { postNews, validateNews } = require('../controllers/newsController');

router.post('/', validateNews, postNews);

module.exports = router;
