const Product = require("../../models/Product");
function capitalizeFirstLetter(string) {
	return string[0].toUpperCase() + string.slice(1);
}

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
		async getProductsByCategory(_, { category }) {
			try {
				category = capitalizeFirstLetter(category);

				const products = await Product.find({ productCategory: category });
				if (products) return products;
				else throw new Error("None found");
			} catch (err) {
				throw new Error(err);
			}
		},
		async getProductDetail(_, { id }) {
			try {
				const product = await Product.findById(id);
				if (product) return product;
				else throw new Error("Product not found");
			} catch (err) {
				throw new Error(err);
			}
		},
	},
};
