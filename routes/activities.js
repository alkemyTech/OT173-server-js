const express = require('express');
const router = express.Router();

const {
  getActivities,
  getActivity,
  editActivity
} = require('../controllers/activitiesControllers');

router.get('/', getActivities);
router.get('/:id', getActivity);
router.put('/:id', editActivity)

module.exports = router;
