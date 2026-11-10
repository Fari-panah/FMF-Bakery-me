//Seed File = a file that inserts initial or sample data into the database, 
// making the project quicker to set up, use, and test.
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/userModel");
const connectDB = require("./config/db.js")


require("dotenv").config(); 

const createAdmin = async () => {
  try {
    await connectDB();

    const existingAdmin = await User.findOne({ email: process.env.ADMIN_EMAIL });

    if (existingAdmin) {
      console.log("Admin already exists");
      return;
    }

    const passwordHash = await bcrypt.hash(
      process.env.ADMIN_PASSWORD,
      10
    );

    const admin = new User({
      name: process.env.ADMIN_NAME,
      email: process.env.ADMIN_EMAIL,
      passwordHash,
      role: "admin",
    });

    await admin.save();

    console.log("Admin created successfully");
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
  }
};

createAdmin();
