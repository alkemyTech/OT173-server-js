const express = require("express");
const router = express.Router();
const organizations = require("../mocks/organizationsMock");

router.get("/:id/public", function (req, res, next) {
  const { id } = req.params;

  const organization = organizations.filter((t) => t.id == id);

  if (!organization.length) {
    return res.status(200).json(organizations[0]);
  }

  return res.status(200).json(organization);
});

module.exports = router;
