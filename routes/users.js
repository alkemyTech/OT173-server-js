const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/usersControllers');

/* GET users listing. */
router.get('/', getUsers);

module.exports = router;
