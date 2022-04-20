var express = require('express');
const { createUser, getUsers, validationsRegisterUser } = require('../controllers/users.controllers');
var router = express.Router();

/* GET users listing. */
router.get('/', getUsers);

router.post('/auth/register', validationsRegisterUser, createUser);

module.exports = router;
