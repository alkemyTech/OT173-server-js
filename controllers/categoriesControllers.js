const { Categories } = require('../models/index.js');
const httpCodes = require('../constants/constants');

const deleteCategory = async function (req, res) {
    try {
        const id = req.params.id
        await Categories.destroy({ where: { id: id } })
        res.sendStatus(httpCodes.NO_CONTENT)
    } catch (error) {
        res.status(httpCodes.INTERNAL_SERVER_ERROR).send(error)
    }
}

module.exports = {
    deleteCategory
}