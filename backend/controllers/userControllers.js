const User = require("../models/userModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
// GET /users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve users" });
  }
};
// add to database
// POST /users
const createUser = async (req, res) => {
  try {
    const {name, email, phone, address, password, confirmPassword } = req.body
    if(!name || !email || !password) {
      return res.status(400).json({"message": "username, email and password are required!"})

    }
    if (password !== confirmPassword) {
    return res.status(400).json({
      message: 'Passwords do not match',
    })
  }
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    name,
    email,
    phone,
    address,
    passwordHash,
    role: "customer"
  })
  const savedUser = await user.save()
  res.status(201).json(savedUser)
    
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to create user", error: error.message });
  }
};

// GET /users/:userId
const getUserById = async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const user = await User.findById(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve user" });
  }
};

// PUT /users/:userId
 const updateUser = async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { ...req.body },
      { new: true }
    );
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update user" });
  }
};


// DELETE /users/:userId
const deleteUser = async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const deletedUser = await User.findOneAndDelete({ _id: userId });
    if (deletedUser) {
      res.status(204).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
