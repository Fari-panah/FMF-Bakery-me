const mongoose  = require("mongoose");
const Schema = mongoose.Schema

const cartItemSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    itemPrice: {
      type: Number,
      required: true,
    },
    itemdescriptionription: {
      type: String,
    },
    quantity: {
      type: Number,
      default: 1,
      min: 1,
    },
  },
  { _id: false }
);


const cartSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,

    },
    products: [cartItemSchema],
    totalPrice: {
        type: Number,
        required: true,
        default: 0,

    }

})

cartSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
 module.exports = mongoose.model("Cart", cartSchema);
