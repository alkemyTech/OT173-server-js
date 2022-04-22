const express = require("express");
const httpCodes = require("../constants/constants");
const router = express.Router();
const organizations = require("../mocks/organizationsMock");

router.get("/:id/public", function (req, res, next) {
  const { id } = req.params;

  const organizerProfile = organizations.find((t) => t.id == id);  

  if (!organizerProfile) {
    return res.status(httpCodes.NOT_FOUND).json({msg: "the organizer is not found"});
  }

  return res.status(httpCodes.OK).json(organizerProfile);
});

module.exports = router;
