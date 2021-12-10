import React from "react";
import "../css/Cart.css";
import Cartrow from "../components/Cartrow.js";
import Checkout from "../images/checkout.svg";

const cart = () => {
	return (
		<div>
			<div className='checkout'>
				<img src={Checkout} className='checkout-img' />
			</div>
			<div className='grey'>
				<div className='row-cont'>
					<Cartrow />
					<Cartrow />
					<div className='place-order'>
						<div className='subtotal'>Subtotal &#8377;2000</div>
						<button className='place-order-btn'>PLACE ORDER</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default cart;
