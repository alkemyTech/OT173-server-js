const { validationResult } = require("express-validator");
const httpCodes = require("../constants/constants");

const validationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(httpCodes.BAD_REQUEST).json({
      ok: false,
      errors: errors.array(),
    });
  }

  next();
};

module.exports = {
  validationErrors,
};