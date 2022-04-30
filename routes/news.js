const express = require("express");
const router = express.Router();
const { Entries } = require('../models/index.js')
const { getNewsById } = require('../controllers/newsControllers.js');

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
  }
});

router.get('/:id', getNewsById);

module.exports = router;
