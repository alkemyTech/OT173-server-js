const express = require('express');
const router = express.Router();
const { newMembers, getMembers, updateMembers } = require('../controllers/membersControllers');
const { validateMembers } = require('../validations/validationMembers');

router.post('/', validateMembers, newMembers);
router.get('/', getMembers);
router.put('/:id',validateMembers, updateMembers);

module.exports = router;