const sgMail = require('@sendgrid/mail')

//Esto en el form de contacto
export const contactMail = (name, surname, email, message) => {
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
}

// Esto en el post a users
export const signUpMail = (email) => {
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
}