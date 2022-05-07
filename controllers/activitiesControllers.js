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

const editActivity = async function (req, res) {
  try {
    await Activity.update({
      name: req.body.name,
      image: req.body.image,
      content: req.body.content
    }, { where: { id: req.params.id } })
    res.sendStatus(httpCodes.OK)
  } catch (error) {
    res.status(httpCodes.INTERNAL_SERVER_ERROR).send(error)
  }
}

const createActivity = async (req, res) => {

  try {
    if (req.body) {
      const newActivity = await Activity.create({ 
        ...req.body
       })

      if (!newActivity) {
        res.status(httpCodes.BAD_REQUEST)
          .json({
            msg: "Activity not created",
            newActivity
          })
      }

      res.status(httpCodes.OK)
        .json({
          msg: "Activity created successfully.",
          newActivity
        })
    } else {
      res.status(httpCodes.NOT_FOUND)
        .json({msg: "You must enter name and content fields."})
    }

  } catch (error) {
    console.log(error)
    res.status(httpCodes.FORBIDDEN)
      .json({
        error,
        msg: "An error occurred. Try again."
      })
  }
}

module.exports = {
  getActivities,
  getActivity,
  editActivity,
  createActivity
};
