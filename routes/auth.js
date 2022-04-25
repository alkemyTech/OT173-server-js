const express = require('express');
const router = express.Router();
const validationsRegisterUser = require('../validator/validationsRegisterUser');
const { createUser } = require('../controllers/authControllers');

router.post('/register', validationsRegisterUser, createUser);

module.exports = router;
