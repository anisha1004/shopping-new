import React from "react";
import Prod from "../images/product.svg";
import "../css/Product.css";

const Product = () => {
	return (
		<div className='prod'>
			<div className='prod-img'>
				<img src={Prod} className='p-img' />
			</div>
			<div className='price-cont'>
				<div>100</div>
				<div>white chair</div>
			</div>
		</div>
	);
};

export default Product;
