var express = require('express');
var router = express.Router();
const sgMail = require('@sendgrid/mail')

//Esto en el form de contacto

router.get('/', function (req, res, next) {
    const { name, surname, email, message } = req.body
    const msg = {
        to: 'juanmhdz99@gmail.com', // Change to your recipient
        from: {
            name: 'Somos Mas',
            email: 'juanmhdz99@gmail.com'
        }, // Change to your verified sender
        subject: 'Contacto Somos Mas',
        text: `Nombre: ${name} Apellido: ${surname} E-mail: ${email} ${message}`,
        html: `
        <h1>Nombre: ${name} Apellido: ${surname}</h1>
        <h2>E-mail: ${email}</h2>
        <p>${message}</p>`,
        replyTo: email
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
});

module.exports = router;
