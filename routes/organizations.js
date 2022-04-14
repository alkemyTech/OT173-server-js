var express = require("express");
var router = express.Router();
const organizations = require("./../data");
const user = require("../models/user");

/* GET organizations res listing. */
router.get("/:id/public", function (req, res, next) {
  const { id } = req.params;

  const organization = organizations.filter((t) => t.id == id);

  if (organization.length === 0) {
    return res.status(200).json(organizations[0]);
  } else {
    return res.status(200).json(organization);
  }
});

module.exports = router;
