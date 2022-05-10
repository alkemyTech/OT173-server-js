const express = require('express');
const router = express.Router();
const { newMembers } = require('../controllers/membersControllers');
const { validateMembers } = require('../validations/validationMembers');

router.post('/', validateMembers, newMembers);

module.exports = router;