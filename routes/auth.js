const express = require('express');
const router = express.Router();
const validationsRegisterUser = require('../validations/validationsRegisterUser');
const { createUser } = require('../controllers/authControllers');
const { createToken } = require('../auth/auth')
const { User } = require('../models/index');
const httpCodes = require("../constants/constants");

router.post('/register', validationsRegisterUser, createUser, async (req, res, next) => {
    const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
    const {  ...userConfirm } = user.dataValues;
    try{
      let token = createToken(userConfirm)

      if(token?.ok) {
        return res.status(httpCodes.OK).json(token);
      }

      return res.status(httpCodes.UNAUTHORIZED).json(token)

    } catch (error) {
      res.status(httpCodes.BAD_REQUEST).json({ error, ok: false });
    }
 });

module.exports = router;
