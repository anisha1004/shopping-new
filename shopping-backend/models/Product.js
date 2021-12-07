const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("Products", ProductSchema);
