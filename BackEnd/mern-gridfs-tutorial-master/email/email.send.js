const nodemailer = require('nodemailer')
const { getMaxListeners } = require('process')

/* Checkout nodemailer usage = nodemailer.com */
/* Get credentials */

const credentials = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'vshrecruitment@gmail.com',
    pass: 'Manchester321?'
  }
}

/* Create transporter object */

const transporter = nodemailer.createTransport(credentials)

module.exports = async (to, content) => {
  const contacts = {
    from: process.env.MAIL_USER,
    to 
  }
  /* Wrap data in single obj -> nodemailer*/
  const email = Object.assign({}, content, contacts)
  await transporter.sendMail(email)
}
