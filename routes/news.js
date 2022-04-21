const express = require('express');
const router = express.Router();
const { Entries } = require('../models/index.js')

router.get('/', async function (req, res, next) {
    const allNews = await Entries.findAll({ where: { type: 'news' } })
    const news = allNews.map(n => {
        n.name,
        n.image,
        n.createdAt
    })
    res.send(news);
});

module.exports = router;