const sgMail = require('@sendgrid/mail')

const sendMail = async ({ name, surname, email, message, subject, recipient }) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: recipient || email,
        from: {
            name: 'tomi1368',
            email: 'tomirodriguez1368@gmail.com'
        },
        subject: subject,
        text: `${name && surname && email ? `Nombre: ${name} Apellido: ${surname} E-mail: ${email} ${message}` : message}`
        ,
        html: `${name && surname && email ?
            `<h1>Nombre: ${name} Apellido: ${surname}</h1>
            <h2>E-mail: ${email}</h2>
            <p>${message}</p>` : `<p>${message}</p>`}`,
        replyTo: email
    }
    let status = {
        error: false,
        message: `Email sent to ${email}`
    }
    try {
        await sgMail.send(msg)
    } catch (err) {
        status = {
            error: true,
            message: err
        }
    } finally {
        return status
    }
}

module.exports = { sendMail }
