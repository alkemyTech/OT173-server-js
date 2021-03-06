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

const updateNew = async (req, res, next) => {
  const { name, category, image, content, type } = req.body;
  const { id } = req.params;
  
  try {
    let categoryFromDB = {}

    if(category) {

      categoryFromDB = await Categories.findOne({
        where: { name: category }
      });
      
      if (!categoryFromDB)
        return res
          .status(httpCodes.BAD_REQUEST)
          .json({ msg: 'Category not found' });
    }

    const updatedNew = await Entries.update(
      {
        name,
        image,
        categoryId: categoryFromDB?.dataValues?.id,
        content
      },
      {
        where: {
          id: id
        },
        returning: true,
        plain: true,
      }
    );
    if (!updatedNew){
      return res
        .status(httpCodes.UNAUTHORIZED)
        .json({ msg: "Invalid username or password" });
    }
    return res.status(httpCodes.OK).json({msg:"Updated successfully", updatedNew});
  } catch (err) {
    return res.status(httpCodes.BAD_REQUEST).json({ err, ok: false });
  }
}

const deleteNew = async (req, res, next) => {
  const { id } = req.params;

  try {
    const response = await Entries.findOne({
      where: {
        id,
        type: "news"
      }
    });

    if (!response) {
      return res
        .status(httpCodes.NOT_FOUND)
        .json({ ok: false, msg: 'There is no news for that ID' })
    }

    await Entries.destroy({
      where: {
        id,
        type: "news"
      }
    });
    return res
      .status(httpCodes.OK)
      .json({ ok: true, msg: "News removed successfully" });

  } catch (error) {
    res.status(httpCodes.BAD_REQUEST).json({ ok: false, error });
  }
}

module.exports = {
  getNewsById,
  postNews,
  updateNew,
  deleteNew
}