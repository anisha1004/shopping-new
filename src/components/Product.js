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
				<div>
					<div className='price'>&#8377; 100</div>
					<div className='desc'>white chair</div>
				</div>
				<div>
					<button className='add-btn'>ADD</button>
				</div>
			</div>
		</div>
	);
};
export default Product;
