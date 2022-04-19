const express = require("express");
const router = express.Router();
const organizations = require("../mocks/organizationsMock");

router.get("/:id/public", function (req, res, next) {
  const { id } = req.params;

  const organizerProfile = organizations.find((t) => t.id == id);  

  if (!organizerProfile) {
    return res.status(404).json({msg: "the organizer is not found"});
  }

  return res.status(200).json(organizerProfile);
});

module.exports = router;
