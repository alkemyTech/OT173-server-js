const express = require('express');
const router = express.Router();

const { getActivity } = require('../controllers/activitiesControllers');

router.get('/:id', getActivity);

module.exports = router;
