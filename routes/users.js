const express = require('express');
const router = express.Router();
const httpCodes = require("../constants/constants")
const { user } = require("../models/user")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.delete("/:id", (req, res) => {
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

module.exports = router;
