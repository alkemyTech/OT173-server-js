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
            attributes: ['name', 'id'],
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

const setCategory = async (req, res) => {
    const { name, description } = req.body;

    try {
        const response = await Categories.update({
            name,
            description
        }, {
            where: {
                id: req.params.id
            }
        })
        if(response) { 
            return res.status(httpCodes.OK).json({
                msg: "Category updated successfully."
            })
        }

        return res.status(httpCodes.BAD_REQUEST).json({
            msg: "Action not completed. Please, try again."
        })
    } catch (error) {
        return res.status(httpCodes.INTERNAL_SERVER_ERROR).json({
            error,
            msg: "An error occurred in the server."
        })
    }
}

module.exports = {
    getCategories,
    deleteCategory,
    addCategory,
    setCategory
};
