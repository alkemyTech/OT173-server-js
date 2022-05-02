const { Activity } = require('../models/index.js');

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
      return res.status(404).json({ msg: 'Activity not found' });
    }

    return res.json(activity);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getActivities,
  getActivity,
};
