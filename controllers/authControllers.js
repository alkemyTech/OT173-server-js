const User = require('../models/user');
const { sequelize } = require('../models/index');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { DataTypes } = require('sequelize');
const httpCodes = require('../constants/constants');

const createUser = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    const passwordHash = await encryptPassword(password);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(httpCodes.BAD_REQUEST).json({ errors: errors.array() });
    };

    try {
        await User(sequelize, DataTypes).create({
            lastName,
            firstName,
            email,
            password: passwordHash,
        });
        res.status(httpCodes.OK).json({ mgs: "Usuario generado con éxito", user: firstName, lastName, email, passwordHash });
    } catch (error) {
        res.status(httpCodes.BAD_REQUEST).json(error);
    };
};

const encryptPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

module.exports = {
    createUser
};