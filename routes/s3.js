const express = require('express');
const router = express.Router();

const multer = require('multer')
const upload = multer({ dest: 'uploads/'})
const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)

const { uploadFile } = require('../services/amazonS3')

router.post('/images', upload.single('image'), async (req, res) => {
  const file = req.file
  const result = await uploadFile(file)
  await unlinkFile(file.path)
  res.status(200).send();
  })

  module.exports = router;
  
 