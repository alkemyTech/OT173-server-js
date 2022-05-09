const httpCodes = require('../constants/constants');
const { Categories } = require('../models/index.js');

const deleteCategory = async function (req, res) {
    try {
        const id = req.params.id
        await Categories.destroy({ where: { id: id } })
        res.sendStatus(httpCodes.NO_CONTENT)
    } catch (error) {
        res.status(httpCodes.INTERNAL_SERVER_ERROR).send(error)
    }
}

const getCategories = async function (req, res) {
    try {
        const categories = await Categories.findAll({
            attributes: ['name'],
        });

        if (!categories) {
            return res.status(httpCodes.NOT_FOUND).json({ msg: 'No categories' });
        }

        return res.json(categories);
    } catch (error) {
        res.status(httpCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
    }
};

const addCategory = async function(req, res){

    const {name, description} = req.body

    try {
        await Categories.create({
            name, description
          });
        
        res.status(httpCodes.OK).json({ msg: "Category created successfully" });
        
    } catch (error) {
        res.status(httpCodes.BAD_REQUEST).json({ msg: error.message });
    }
}

module.exports = {
    getCategories,
    deleteCategory,
    addCategory
};
