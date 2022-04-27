const httpCodes = require("../constants/constants");
const { Entries } = require('../models/index.js');

const getNewsById = async (req, res, next) => {
    const { id } = req.params;

    try {
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

module.exports = {
    getNewsById,
}