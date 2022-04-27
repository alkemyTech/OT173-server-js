const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcryptjs");
const validationLogin = require("../validations/validationsLogin");
const httpCodes = require("../constants/constants");


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.delete("/destroy/:id", (req, res) => {
  user.destroy({where : { id: +req.params.id }})
      .then(response => {
        let res = {}
        if(response) {
          res = {
            msg: "User deleted successfully.",
            url: "/users/" + req.params.id
          }
          res.status(httpCodes.OK).json(res)
        } else {
          res = {
            msg: "An error occurred. Try again.",
            url: "/users/" + req.params.id
          }
          res.status(httpCodes.BAD_REQUEST).json(res)
        }
      })
      .catch(err => res.status(httpCodes.BAD_REQUEST).json(err))
})
/*Post user login*/
router.post(
  "/auth/login",
  validationLogin,

  async function (req, res) {
    try {
      const user = await db.User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (!user) {
        return res.status(httpCodes.UNAUTHORIZED).json({ msg: "Invalid username or password" });
      }

      const comparePassword = bcrypt.compareSync(
        req.body.password,
        user.dataValues.password
      );
      if (!comparePassword) {
        return res.status(httpCodes.UNAUTHORIZED).json({ msg: "Invalid username or password" });
      }

      const { password, ...userConfirm } = user.dataValues;

      return res.status(httpCodes.OK).json(userConfirm);
    } catch (error) {
      res.status(httpCodes.BAD_REQUEST).json({ error, ok: false });
    }
  }
);

module.exports = router;
