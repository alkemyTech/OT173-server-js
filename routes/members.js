const express = require('express');
const router = express.Router();
const { newMembers, getMembers, updateMembers,deleteMember } = require('../controllers/membersControllers');
const { validateMembers } = require('../validations/validationMembers');

router.post('/', validateMembers, newMembers);
router.get('/', getMembers);
router.put('/:id',validateMembers, updateMembers);
router.delete("/",validateMembers,deleteMember)
module.exports = router;