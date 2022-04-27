const express = require('express');
const { getNewsById } = require('../controllers/newsControllers.js');
const router = express.Router();
const { Entries } = require('../models/index.js')

router.get('/', async function (req, res, next) {
    try {
        const allNews = await Entries.findAll({ where: { type: 'news' } })
        const news = allNews.map(n => {
            n.id,
            n.name,
            n.image,
            n.createdAt
        })
        res.send(news);
    } catch (error) {
        res.send(error)
    }
});

router.get('/:id', getNewsById);

module.exports = router;