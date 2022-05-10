const { check } = require('express-validator');
const { validationErrors } = require('./validationResults');


const MEMBERS_ERROR_MESSAGES = {
    NAME_REQUIRED: 'El campo nombre es requerido y debe ser una cadena de caracteres',
};

const validateMembers = [
    check('name').not().isEmpty().withMessage(MEMBERS_ERROR_MESSAGES.NAME_REQUIRED),
    check('name').isString().withMessage(MEMBERS_ERROR_MESSAGES.NAME_REQUIRED),
    validationErrors
];

module.exports = { validateMembers };