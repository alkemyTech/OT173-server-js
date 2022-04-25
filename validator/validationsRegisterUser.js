const { body } = require('express-validator');
const User = require('../models/user');
const { sequelize } = require('../models/index');
const { DataTypes } = require('sequelize');

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
        });
    })
];

module.exports = validationsRegisterUser;