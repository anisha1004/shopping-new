import React from "react";
import Product from "../components/Product";
import "../css/Products.css";

const Products = () => {
	return (
		<div>
			<div className='prod-row'>
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
			<div className='prod-row'>
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
		</div>
	);
};

export default Products;
