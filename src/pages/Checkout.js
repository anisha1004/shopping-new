import React from "react";
import CheckoutImg from "../images/checkout-page.svg";
import "../css/Checkout.css";
import Confirm from "../images/confirm.svg";

const Checkout = () => {
	return (
		<div className='checkout-page'>
			<div className='confirm'>
				<img src={Confirm} className='confirm-img' />
			</div>
			<div className='white'>
				<div className='check-left'>
					<div>
						<img src={CheckoutImg} />
					</div>
					<div className='order-confirm'>Order Confirmed</div>
					<div className='wait'>
						Your order have been confirmed, please wait and track your order
					</div>
					<button className='go-home'>GO TO HOMEPAGE</button>
				</div>
				<div className='check-right'></div>
			</div>
		</div>
	);
};

export default Checkout;
