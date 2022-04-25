const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
require('dotenv').config()
const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const multer = require('multer')
const upload = multer({ dest: 'uploads/'})

const { uploadFile } = require('./services/amazonS3')



const app = express();
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.post('/images', upload.single('image'), async (req, res) => {
  const file = req.file
  console.log(file)
  const result = await uploadFile(file)
  await unlinkFile(file.path)
  console.log(result)
  res.send("se envio correctamente")
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
