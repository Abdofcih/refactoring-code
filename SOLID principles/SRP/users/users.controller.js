
const { createUserService, updateUserService } = require("./user.service");

const createUser = async (req, res) => {
  const newUser = await createUserService(req.body);

  res.send(newUser);
};
const updateUser = async (req, res) => {
  const { id } = req.params;
 try {
    const newUser = await updateUserService(id, req.body);
    res.send(newUser);
 } catch (error) {
    return res.status(500).json({ error: 'Failed to update user' });
    
 }
};
module.exports = {
  createUser,
  updateUser,
};
