const httpCodes = require("../constants/constants");
const { Entries, Categories } = require('../models/index.js');

const getNewsById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await Entries.findOne({
            where: {
                id,
                type: 'news'
            },
        });

        if (!response) {
            return res.status(httpCodes.BAD_REQUEST)
                .json({ msg: 'There is no news for that ID' })
        }

        res.status(httpCodes.OK)
            .json(response);
    } catch (error) {
        res.status(httpCodes.BAD_REQUEST)
            .json({ error, ok: false });
    }
};

const postNews = async (req, res) => {
  const { name, content, image, category } = req.body;
  
  const newsToInsert = {
    name,
    content,
    image,
    type: 'news',
  };

  try {
    const categoryFromDB = await Categories.findOne({
      where: { name: category },
    });
    if (!categoryFromDB)
      return res
        .status(httpCodes.BAD_REQUEST)
        .json({ msg: 'Category not found' });

    const insertedNews = await Entries.create({
      ...newsToInsert,
      categoryId: categoryFromDB.dataValues.id,
    });

    return res.status(httpCodes.OK).json({
      ok: true,
      message: 'News created successfully',
      news: insertedNews,
    });
  } catch (error) {
    return res.status(httpCodes.INTERNAL_SERVER_ERROR).json({
      ok: false,
      error,
    });
  }
};

module.exports = {
    getNewsById,
    postNews,
}