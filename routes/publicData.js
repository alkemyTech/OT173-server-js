const express = require("express");
const router = express.Router();
const publicData = require("../mocks/publicDataMock");

router.get("/data", function (req, res, next) {

  res.status(200).send(publicData);
});

module.exports = router;
