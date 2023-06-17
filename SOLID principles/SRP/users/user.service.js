const { User } = require("../db");
const { sendSignUpEmail, sendUpdateEmail } = require("../emails/email.service");

const createUserService = async (userData) => {

  try {
    const newUser = await User.create(userData);
    await sendSignUpEmail(newUser.email);
    return newUser;
  } catch (error) {
    return error.message || "Something went wrong while creating a user";
  }
};

const updateUserService = async (id, userData) => {
  try {
    const user = await User.findByPk(id);

    if (!user) {
      throw new Error("User not found");
    }
    Object.assign(user, userData);
    await user.save();
    await sendUpdateEmail(user.email);
    return user;
  } catch (error) {
    return error.message || "Something went wrong while updating a user";
  }
};

module.exports = {
  createUserService,
  updateUserService,
};
