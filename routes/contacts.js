const express = require('express');
const router = express.Router();
const db = require('../models');
const { authRole } = require('../middlewares/authorizationMiddleware');

router.get('/', authRole, async (req, res, next) => {
  try {
    const result = await db.Contact.findAll();
    res.json(result);
  } catch (error) {
    res.status(httpCodes.BAD_REQUEST).json({ error });
  }
});

module.exports = router;
