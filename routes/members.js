const express = require('express');
const router = express.Router();
const { newMembers, getMembers, editMembers } = require('../controllers/membersControllers');
const { validateMembers } = require('../validations/validationMembers');

router.post('/', validateMembers, newMembers);
router.get('/', getMembers);
router.put('/:id',validateMembers, editMembers);

module.exports = router;