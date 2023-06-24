const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail", // or your preferred email service
  auth: {
    user: process.env.MAILER_EMAIL,
    pass: process.env.MAILER_PASSWORD,
  },
});

// SRP task
const sendEmail = async (userEmail, { subject, text }) => {
  const mailOptions = {
    from: process.env.MAILER_EMAIL,
    to: userEmail,
    subject,
    text,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = {
  sendEmail,
};
