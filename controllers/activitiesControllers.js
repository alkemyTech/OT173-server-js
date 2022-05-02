const { Activity } = require('../models/index.js');

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
  getActivity,
};
