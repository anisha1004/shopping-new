const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	productCategory: {
		type: String,
		required: true,
	},
	productName: {
		type: String,
		required: true,
	},
	productPrice: {
		type: Number,
		required: true,
	},
	productImage: {
		data: String,
		contentType: String,
	},
	productStock: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model("Products", ProductSchema);
