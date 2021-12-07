const Product = require("../../models/Product");

module.exports = {
	Query: {
		async getProducts() {
			try {
				const products = await Product.find();
				if (products) return products;
				else throw new Error("None found");
			} catch (err) {
				throw new Error(err);
			}
		},
	},
};
