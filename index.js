const express = require('express')
const app = express()
const port = 3000
const nodemailer = require('nodemailer')
const dotenv = require('dotenv').config({ path: './config/config.env' })


app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`)
})

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.USER,
      pass: process.env.PASS,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN
    }
  });

let mailOptions = {
    from: 'tantrungse@gmail.com',
    to: 'votantrung2k1@gmail.com',
    subject: 'Nodemailer Project',
    text: 'Hi from your nodemailer project'
};

transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });