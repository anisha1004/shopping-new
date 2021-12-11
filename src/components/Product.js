import React from "react";

import "../css/Product.css";

const Product = ({ prod }) => {
	return (
		<div className='prod'>
			<div className='prod-img'>
				<img
					className='p-img'
					alt='product-img'
					src={`data:image/svg+xml;base64,${prod.productImage.data}`}
				/>
			</div>
			<div className='price-cont'>
				<div>
					<div className='price'>&#8377; {prod.productPrice}</div>
					<div className='desc'>{prod.productName}</div>
				</div>
				<div>
					<button className='add-btn'>ADD</button>
				</div>
			</div>
		</div>
	);
};
export default Product;
