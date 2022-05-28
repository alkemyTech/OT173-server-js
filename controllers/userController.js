const httpCodes = require('../constants/constants.js');
const { User } = require('../models/index.js');
const bcrypt = require('bcryptjs');

const updateUser = async (req, res, next) => {
  const encryptPassword = async password => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  };

  const { firstName, lastName, email, image, password } = req.body;
  const { id } = req.params;
  const passwordHash = await encryptPassword(password);

  try {
    const response = await User.findByPk(id);

    if (!response) {
      return res
        .status(httpCodes.NOT_FOUND)
        .json({ ok: false, msg: 'User does not exist in our database!' });
    }

    const updatedUser = await response.update({
      firstName,
      lastName,
      email,
      image,
      password: passwordHash,
    });

    return next();
  } catch (err) {
    return res.status(httpCodes.BAD_REQUEST).json({ ok: false, error: err });
  }
};

module.exports = {
  updateUser,
};
