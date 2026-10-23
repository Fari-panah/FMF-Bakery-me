/* {
  "name": "Matti Seppänen",
  "email": "matti@example.com",
  "password": "M@45mtg$",
  "phone_number": "+358401234567",
  "gender": "Male",
  "date_of_birth": "2000-01-15",
  "membership_status": "Active"
} */

  const mongoose = require("mongoose");

  const Schema = mongoose.Schema;
  
  const userSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
      },
      address: {
        type: String,

      },
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("User", userSchema);
  