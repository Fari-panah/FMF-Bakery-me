
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
      passwordHash: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
      },
      address: {
        type: String,

      },
      role: {
        type: String,
        enum: ["customer", "admin"],
        default: "customer",
      },
    },
    { timestamps: true }
  );
  orderSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
  
  module.exports = mongoose.model("User", userSchema);
  