const express = require('express');
const router = express.Router();
const addContact = require("../controllers/contactController.js")
const validationContact = require("../validations/validationContact.js")
const db = require('../models');
const { authRole } = require('../middlewares/authorizationMiddleware');

router.post("/",validationContact,addContact);

router.get('/', authRole, async (req, res, next) => {
    try {
      const result = await db.Contact.findAll();
      res.json(result);
    } catch (error) {
      res.status(httpCodes.BAD_REQUEST).json({ error });
    }
  });
  
  module.exports = router;
