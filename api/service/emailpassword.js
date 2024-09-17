const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
      user: "zenvest.official@gmail.com",
      pass: "zasl dbno rlcc irre",
  },
});
async function sendEmail (e,password) {
  const mailOptions = {
    from: {
      name: 'ZENVEST',
      address: "zenvest.official@gmail.com"
    },
    to: e.email,
    subject: "New Password..!!",
    text: password
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log("mail sent to:- ",e.email);
  } catch (err) {
    console.log(err);
  }
}
module.exports = {sendEmail}