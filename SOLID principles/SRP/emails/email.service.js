const { sendEmail } = require("./email.setup");

const sendSignUpEmail = async (userEmail) => {
  const emailData = {
    subject: "Welcome to our platform",
    text: "Thank you for signing up!",
  };
  await sendEmail(userEmail, emailData);
};
const sendUpdateEmail = async (userEmail) => {
  const emailData = {
    subject: "Your account updated",
    text: "Thank you for updating your account!",
  };
  await sendEmail(userEmail, emailData);
};


module.exports = {
  sendSignUpEmail,
  sendUpdateEmail,
};
