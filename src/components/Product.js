import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

import "../css/Product.css";

const Product = ({ prod }) => {
	const qty = 1;
	const dispatch = useDispatch();

	const addToCartHandler = (product) => {
		dispatch(addToCart(product, qty));
	};

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
					<button className='add-btn' onClick={() => addToCartHandler(prod)}>
						ADD
					</button>
				</div>
			</div>
		</div>
	);
};
export default Product;
