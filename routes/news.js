const express = require('express');
const router = express.Router();
const { Entries } = require('../models/index.js')

router.get('/', async function (req, res, next) {
    try {
        const allNews = await Entries.findAll({ where: { type: 'news' } })
        const news = allNews.map(n => {
            return {
                id: n.id,
                name: n.name,
                image: n.image,
                createdAt: n.createdAt
            }
        })
        res.send(news);
    } catch (error) {
        res.send(error)
    }
});

module.exports = router;