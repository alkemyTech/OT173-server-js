/*
const express = require('express');
const router = express.Router();

const multer = require('multer')
const upload = multer({ dest: 'uploads/'})

const { uploadFile } = require('../services/amazonS3')

const app = express()

app.post('/images', upload.single('image'), async (req, res) => {
    const file = req.file
    console.log(file)
  
    // apply filter
    // resize 
  
    const result = await uploadFile(file)
    console.log(result)
    const description = req.body.description
    res.send("se envio correctamente")
  })

  module.exports = router;
  */
 