import React from "react";
import CheckoutImg from "../images/checkout-page.svg";
import "../css/Checkout.css";
import Confirm from "../images/confirm.svg";
import Dhl from "../images/dhl.svg";
import Delivery from "../images/delivery.svg";
import Line from "../images/checkout-line.svg";

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
				<div className='check-right'>
					<div className='delivery'>
						<img src={Delivery} />
						<img src={Dhl} />
					</div>
					<div className='final-item-list'>
						<div className='final-item'>
							<div className='item-name'>Way Kambas Mini Ebony</div>
							<div className='item-quantity'>2 x INR 1.024.000</div>
						</div>
						<div className='final-item'>
							<div className='item-name'>Way Kambas Mini Ebony</div>
							<div className='item-quantity'>2 x INR 1.024.000</div>
						</div>
					</div>
					{/* <div className='three'>
						<span>Subtotal</span>
						<span>Rs 2000</span>
					</div>
					<div className='three'>
						<span>Shipping Cost</span>
						<span>Rs 25000</span>
					</div>
					<div className='three'>
						<span>Packaging</span>
						<span>Rs 2000</span>
					</div> */}
					<div className='final-total'>
						<div className='three'>
							<span>Subtotal</span>
							<span>Shipping Cost</span>
							<span>Packaging</span>
						</div>
						<div className='three'>
							<span>Rs 2000</span>
							<span>Rs 25000</span>
							<span>Rs 2000</span>
						</div>
					</div>

					<img src={Line} />
					<div className='grand'>
						<span className='grandtotal'>Grand Total</span>{" "}
						<span className='grandprice'>Rs 2700</span>
					</div>
					<img src={Line} />
					<div className='address'>
						<span>Address</span>
						<span>18 Meera Road, Mumbai</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
