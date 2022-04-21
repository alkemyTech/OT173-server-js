var express = require('express');
var router = express.Router();
const sgMail = require('@sendgrid/mail')

router.post('/', function (req, res, next) {
  // Esto en el post a users

  const { email } = req.body
  const msg = {
    to: email, // Change to your recipient
    from: {
      name: 'Somos Mas',
      email: 'juanmhdz99@gmail.com'
    }, // Change to your verified sender
    subject: 'Bienvenido a Somos Mas!',
    text: 'Tu cuenta ha sido creada con éxito.',
    html: '<strong>Tu cuenta ha sido creada con éxito.</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
  res.send('respond with a resource');

  //Esto en el form de contacto

  // const { email, message, subject } = req.body
  // const msg = {
  //   to: 'juanmhdz99@gmail.com', // Change to your recipient
  //   from: email, // Change to your verified sender
  //   subject: subject,
  //   text: message,
  //   html: `<p>${message}</p>`,
  // }
  // sgMail
  //   .send(msg)
  //   .then(() => {
  //     console.log('Email sent')
  //   })
  //   .catch((error) => {
  //     console.error(error)
  //   })
});


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
