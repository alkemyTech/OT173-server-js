const User = require('../models/user');
const { sequelize } = require('../models/index');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { DataTypes } = require('sequelize');


const getUsers = (req, res, next) => {
    res.send('respond with a resource');
}

const createUser = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    const passwordHash = await encryptPassword(password);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    };

    try {
        await User(sequelize, DataTypes).create({
            lastName,
            firstName,
            email,
            password: passwordHash,
        });
        res.status(201).json({ mgs: "Usuario generado con éxito", user: firstName, lastName, email, passwordHash });
    } catch (error) {
        res.status(400).json(error);
    };
};

const validationsRegisterUser = [
    body("firstName", "Ingrese su nombre completo")
        .exists()
        .isLength({ min: 5 }),
    body("lastName", "Ingrese su apellido completo")
        .exists()
        .isLength({ min: 3 }),
    body("password", "La contraseña debe tener mas de 5 caracteres")
        .exists()
        .isLength({ min: 5 }),
    body('email').custom(async (value) => {
        return await User(sequelize, DataTypes).findAll({
            where: {
                email: value
            }
        }).then(user => {
            if (user.length > 0) {
                return Promise.reject('Ya existe un usuario con ese email');
            }
            return true;
        })
    })
];

const encryptPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

module.exports = {
    getUsers,
    createUser,
    validationsRegisterUser
};