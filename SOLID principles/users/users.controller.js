
const { createUserService, updateUserService,findOneUserService } = require("./user.service");

const findOneUser = async (req,res)=>{
  const { id } = req.params;
  const user = await findOneUserService(id)
  if(!user){
    return res.status(404).json({ message: 'User not found' });
  }
  res.send(user)
}
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
  findOneUser
};
