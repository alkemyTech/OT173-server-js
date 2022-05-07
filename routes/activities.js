const express = require("express");
const router = express.Router();
const {
    getActivities,
  getActivity,
  editActivity,
  createActivity
} = require('../controllers/activitiesControllers');

router.get('/', getActivities);
router.get('/:id', getActivity);
router.put('/:id', editActivity)
router.post("/", createActivity)

module.exports = router;