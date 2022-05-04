const { Activity } = require('../models/index.js');

const httpCodes = require('../constants/constants');

const getActivities = async function (req, res) {
  try {
    const activities = await Activity.findAll();

    if (!activities) {
      return res.status(httpCodes.NOT_FOUND).json({ msg: 'No activities' });
    }

    return res.json(activities);
  } catch (error) {
    res.status(httpCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
  }
};

const getActivity = async function (req, res) {
  const { id } = req.params;
  try {
    const activity = await Activity.findByPk(id);

    if (!activity) {
      return res
        .status(httpCodes.NOT_FOUND)
        .json({ msg: 'Activity not found' });
    }

    return res.json(activity);
  } catch (error) {
    res.status(httpCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message });
  }
};

module.exports = {
  getActivities,
  getActivity,
};
