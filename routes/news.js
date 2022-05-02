const express = require("express");
const router = express.Router();

const { Entries } = require('../models/index.js');
const { validateNews } = require('../validations/validationNews.js');
const { getNewsById, postNews } = require('../controllers/newsControllers.js');


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
router.put("/:id", async (req, res, next) => {
  const { name, content, image, type } = req.body;
  const { id } = req.params;
  try {
    const updatedNew = await Entries.update(
      {
        name,
        content,
        image,
        type,
      },
      {
        where: {
          categoryId: id,
        },
        returning: true,
        plain: true,
      }
    );
    if (!updatedNew)
      return res
        .status(httpCodes.UNAUTHORIZED)
        .json({ msg: "Invalid username or password" });
    res.status(httpCodes.OK).json(updatedNew);
  } catch (err) {
    res.status(httpCodes.BAD_REQUEST).json({ error, ok: false });

router.post('/', validateNews, postNews);
router.get('/:id', getNewsById);

module.exports = router;
