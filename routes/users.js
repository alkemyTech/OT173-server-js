var express = require("express");
var router = express.Router();
const db = require("../models");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

/*Post user login*/
router.post(
  "/auth/login",

  body("email", "Invalid email format").isEmail(),
  body("password", "Must be at least 4 chars long").isLength({ min: 4 }),

  async function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await db.User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (!user) {
        return res.status(401).json({ msg: "Invalid username or password" });
      }

      const comparePassword = bcrypt.compareSync(
        req.body.password,
        user.dataValues.password
      ); // true
      if (!comparePassword) {
        return res.status(401).json({ msg: "Invalid username or password" });
      }

      const { password, ...userConfirm } = user.dataValues;

      return res.status(200).json(userConfirm);
    } catch (error) {
      res.json({ error, ok: false });
    }
  }
);

module.exports = router;
