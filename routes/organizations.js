const express = require('express');
const httpCodes = require('../constants/constants');
const db = require('../models/index.js');
const router = express.Router();

router.get('/public', async function (req, res, next) {
  try {
    const result = await db.Organizations.findAll();
    res.status(httpCodes.OK).json(result);
  } catch (error) {
    res.status(httpCodes.BAD_REQUEST).json({ error });
  }
});

module.exports = router;
