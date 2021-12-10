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
				console.log(category);
				const products = await Product.find({ productCategory: category });
				if (products) return products;
				else throw new Error("None found");
			} catch (err) {
				throw new Error(err);
			}
		},
	},
};
