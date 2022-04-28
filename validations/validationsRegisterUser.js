const { body } = require('express-validator');
const { validationErrors } = require('./validationResults');

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
    body("email", "Formato de email invalido")
        .isEmail(),
    validationErrors
];

module.exports = validationsRegisterUser;