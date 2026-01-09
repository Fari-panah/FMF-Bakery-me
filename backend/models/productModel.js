const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		category: {
			type: String,
		    required: true,
	 },
	
   } ,{
	timestamps: true // createdAt, updatedAt
	});

const Product = mongoose.model("Product", productSchema); //collection name(model):Product

module.exports = Product;


// const mongoose = require('mongoose');
 
// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   stock: { type: Number, required: true },
//   imageUrl: { type: String },
//   ingredients: {type: String},
//   rating: { type: Number, required: true },
//   reviews: { type: Number, required: true },
//   category: {type: String},
//   weight: {type: Number, required: true}
// });
 
// const Product = mongoose.model('Product', productSchema);
 
// module.exports = Product;
 