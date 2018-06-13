const express = require('express')
const router = express.Router()
const sgMail = require('@sendgrid/mail')

router.post('/sendmail', function (req, res) {
    sgMail.setApiKey(process.env.SendGrid_API)

    let toEmail = process.env.NODE_ENV === 'production' ? process.env.Email_Prod : process.env.Email_Dev
    
    let message = `<p><strong>Name: </strong> ${req.body.name}<p>
                <p><strong>Phone: </strong> ${req.body.phone}<p>
                <p><strong>Email: </strong> ${req.body.email}<p>
                <p><strong>Primary Insurance: </strong> ${req.body.insurance}<p>
                <p><strong>Message: </strong> ${req.body.message}<p>`

    const msg = {
        to: toEmail,
        from: 'webmaster@thewisewaycounseling.com',
        subject: 'Message via TheWiseWayCounseling.com',
        html: message
    }

    sgMail.send(msg)
    .then(() => {
        res.status(200).json({
            title: 'Success',
            status: true
        })
    }).catch(error => {
        console.error(error.toString())

        res.status(401).json({
            title: 'Error',
            status: false
        })
    })
})

router.all('*', function (req, res) {
    res.redirect(301, '/')
})

module.exports = router
