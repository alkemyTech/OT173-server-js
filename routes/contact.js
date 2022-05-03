const express = require('express');
const router = express.Router();
const {addContact} = require("../controllers/contactController.js")
const validationContact = require("../validations/validationContact.js")

router.post("/",validationContact,addContact)