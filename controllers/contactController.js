const httpCodes = require("../constants/constants.js");
const {Contact} = require("../models/index.js")

const addContact = async (req,res,next)=>{
    const {name,email,phone,message} = req.body   

    try {
        const newContact = await Contact.create({name,email,phone,message})        
        res.status(httpCodes.OK).json({error:false})
    } catch (error) {
        res.status(httpCodes.BAD_REQUEST).json({error:true,message:error.message || "Error al enviar el contacto"})
    }       
}

module.exports = addContact