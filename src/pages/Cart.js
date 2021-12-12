import React from "react";
import "../css/Cart.css";
import Cartrow from "../components/Cartrow.js";
import Checkout from "../images/checkout.svg";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const Cart = () => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	const qtyChangeHandler = (product, qty) => {
		if (qty === 0) dispatch(removeFromCart(product.id));
		else dispatch(addToCart(product, qty));
	};

	const removeHandler = (id) => {
		dispatch(removeFromCart(id));
	};

	const getCartSubTotal = () => {
		return cartItems.reduce(
			(price, item) => item.productPrice * item.qty + price,
			0
		);
	};

	return (
		<div>
			<div className='checkout'>
				<img src={Checkout} className='checkout-img' alt='checkout' />
			</div>
			{cartItems.length === 0 ? (
				<div> YOUR CART IS EMPTY </div>
			) : (
				<div className='grey'>
					<div className='row-cont'>
						{cartItems.map((item) => (
							<Cartrow
								key={item.id}
								cartItem={item}
								qtyChangeHandler={qtyChangeHandler}
								removeHandler={removeHandler}
							/>
						))}
						<div className='place-order'>
							<div className='subtotal'>
								Subtotal &#8377; {getCartSubTotal().toFixed(2)}
							</div>
							<button className='place-order-btn'>PLACE ORDER</button>
						</div>
					</div>
				</div>
			)}
			{/* <div className='grey'>
				<div className='row-cont'>
					<Cartrow />
					<div className='place-order'>
						<div className='subtotal'>Subtotal &#8377; 2700</div>
						<button className='place-order-btn'>PLACE ORDER</button>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default Cart;
