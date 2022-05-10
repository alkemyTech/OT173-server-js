const express = require("express");
const router = express.Router();
const { Entries } = require('../models/index.js');
const { validateNews } = require('../validations/validationNews.js');
const { getNewsById, postNews, updateNew, deleteNew } = require('../controllers/newsControllers.js');
const {authRole} = require("../middlewares/authorizationMiddleware.js")

router.get('/', async function (req, res, next) {
    try {
        const allNews = await Entries.findAll({ where: { type: 'news' } })
        const news = allNews.map(n => {
            return {
                id: n.id,
                name: n.name,
                image: n.image,
                content: n.content,
                createdAt: n.createdAt
            }
        })
        res.send(news);
    } catch (error) {
        res.send(error)
    }
});

router.post('/', validateNews, postNews);
router.get('/:id', getNewsById);
router.put("/:id", authRole, updateNew);
router.delete("/:id", deleteNew);

module.exports = router;
