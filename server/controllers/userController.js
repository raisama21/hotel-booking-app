const User = require("../model/User");

async function updateUser(req, res) {
  try {
    const result = await User.findByIdAndUpdate(req?.params?.id, req.body);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser(req, res) {
  try {
    const result = await User.findByIdAndDelete(req?.params?.id);

    res.status(204).json(result);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { updateUser, deleteUser };
