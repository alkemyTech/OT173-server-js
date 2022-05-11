const express = require('express');
const router = express.Router();
const { newMembers, getMembers } = require('../controllers/membersControllers');
const { validateMembers } = require('../validations/validationMembers');

router.post('/', validateMembers, newMembers);
router.get('/', getMembers);

module.exports = router;