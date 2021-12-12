import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import Cart from "../images/cart.svg";
import Profile from "../images/profile.svg";
import Search from "../images/search.svg";
import { useSelector } from "react-redux";

const Navbar = () => {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const getCartCount = () => {
		return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
	};
	return (
		<div className='navbar'>
			<div className='search'>
				<img src={Search} className='search-icon' alt='search icon' />
				<input placeholder='Search store' className='searchbar' />
			</div>
			<div className='nav-menu'>
				<Link to='/products' style={{ textDecoration: "none", color: "black" }}>
					<div className=''>PRODUCTS</div>
				</Link>
				<div className=''>MANUFACTURING</div>
				<div className=''>STORY</div>
				<div className=''>PACKAGING</div>
				<div className='cart-btn'>
					<Link to='/cart'>
						<img src={Cart} alt='cart' />
					</Link>
					<span className='cartlogo-badge'>{getCartCount()}</span>
				</div>
				<div className='profile-btn'>
					<img src={Profile} alt='profile' />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
