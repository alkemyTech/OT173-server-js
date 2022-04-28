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

router.delete("/:id", (req, res) => {
  
  db.User.destroy({ where : { id: +req.params.id } })
      .then(response => {
        let confirm = {}

        switch (typeof response != "undefined") {
          case response === 1:
            confirm = {
              msg: "User deleted successfully.",
              url: "http://localhost:3000/users/" + req.params.id
            }
            res.status(httpCodes.OK).json(confirm)
          default:
            confirm = {
              msg: "An error occurred. Try again.",
              url: "http://localhost:3000/users/" + req.params.id
            }
            res.status(httpCodes.BAD_REQUEST).json(confirm)
        }
      })
      .catch(err => res.status(httpCodes.BAD_REQUEST).json({msg: "An error occurred.", err: JSON.stringify(err)}))
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
