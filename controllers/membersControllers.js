const httpCodes = require('../constants/constants');
const { Member } = require('../models/index');

const newMembers = async (req, res, next) => {
    try {
        const { name, image } = req.body;
        const response = await Member.create({
            name,
            image
        });

        return res
            .status(httpCodes.OK)
            .json({ ok: true, msg: 'Member created successfully' });

    } catch (error) {
        return res
            .status(httpCodes.INTERNAL_SERVER_ERROR)
            .json({ ok: false, error });
    };
};


const getMembers = async(req, res)=>{
    
    try {
        const resp = await Member.findAll({raw: true})    
        res.status(httpCodes.OK).json({members: resp})
        
    } catch (error) {
        return res
        .status(httpCodes.BAD_REQUEST)
        .json({ ok: false, error });       
    }
}


module.exports = {
    newMembers,
    getMembers
};