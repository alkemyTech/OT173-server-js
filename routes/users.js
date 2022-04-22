const express = require('express');
const router = express.Router();
const { createUser, getUsers, validationsRegisterUser } = require('../controllers/usersControllers');

/* GET users listing. */
router.get('/', getUsers);

router.post('/auth/register', validationsRegisterUser, createUser);

module.exports = router;
