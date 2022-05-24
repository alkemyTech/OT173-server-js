const express = require('express');
const router = express.Router();
const {
  getActivities,
  getActivity,
  editActivity,
  createActivity,
  deleteActivity,
} = require('../controllers/activitiesControllers');

router.get('/', getActivities);
router.get('/:id', getActivity);
router.post('/', createActivity);
router.put('/:id', editActivity);
router.delete('/:id', deleteActivity);

module.exports = router;
