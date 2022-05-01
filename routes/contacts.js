const express = require("express");
const router = express.Router();
const db = require("../models");

router.get('/', async (req, res, next) => {
    try{
       const result = await db.Contact.findAll();
       res.send(result)
     } catch(error) {
       res.send(error)
     } 
 });

 
module.exports = router;