const jwt = require('jsonwebtoken');
const httpCodes = require('../constants/constants');

const authRole = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(httpCodes.UNAUTHORIZED).send('Access denied');
  } else {
    const tokenBody = token.slice(7);
    jwt.verify(tokenBody, 'secretKey', (err, decoded) => {
      if (err) {
        console.log(`JWT error: ${err}`);
        return res.status(httpCodes.UNAUTHORIZED).send('Access denied');
      }

      if (decoded.user.roleId === 1) {
        next();
      } else {
        return res.status(httpCodes.FORBIDDEN).send('Access denied');
      }
    });
  }
};

module.exports = { authRole };
