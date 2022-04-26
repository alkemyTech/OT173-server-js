const httpCodes = require("../constants/constants");
const Entry = require('../models/entry');
const { sequelize } = require("../models/index");
const { DataTypes } = require('sequelize');
const { response } = require("express");

const getNewsById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const response = await Entry(sequelize, DataTypes).findAll({
            where: { id }
        })
        
        res.status(httpCodes.OK).json( response );
    } catch (error) {
        response.status(httpCodes.BAD_REQUEST).json({msg: 'no existing news in a ID'})
    }
};

const createNews = async (req, res) => {
    const { name, content, image, categoryId, type } = req.body;
    // console.log({ name, content, image, categoryId, type })

    try {
        await Entry(sequelize, DataTypes).create({
            name,
            content,
            image,
            categoryId,
            type
        })
        res.status(httpCodes.OK).json({ msg: 'news created success' })

    } catch (error) {
        res.json(error)
    }
}


module.exports = {
    getNewsById,
    createNews
}