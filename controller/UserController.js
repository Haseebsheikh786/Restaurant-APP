const { User } = require("../models/User");

exports.fetchUserById = async (req, res) => {
  const { id } = req.user;
  try {
    const user = await User.findById(id);
    res.status(200).json({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role, 
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
    console.log("user updated successfully");
  } catch (err) {
    res.status(400).json(err);
    console.log("user not updated error");
  }
};
