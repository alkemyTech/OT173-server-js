const { User } = require('../models/index');
const bcrypt = require('bcryptjs');
const httpCodes = require('../constants/constants');

const createUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const passwordHash = await encryptPassword(password);

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (user) {
      return res
        .status(httpCodes.UNAUTHORIZED)
        .json({ ok: false, msg: 'Ya existe un usuario con ese email' });
    }

    await User.create({
      lastName,
      firstName,
      email,
      password: passwordHash,
    });

    res.status(httpCodes.OK).json({
      ok: true,
      msg: 'Usuario registrado con éxito',
      user: firstName,
      lastName,
      email,
      passwordHash,
    });
  } catch (error) {
    res.status(httpCodes.BAD_REQUEST).json({ error, ok: false });
  }
};

const encryptPassword = async password => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

module.exports = {
  createUser,
};
