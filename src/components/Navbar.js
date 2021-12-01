import React from "react";
import "../css/Navbar.css";
import Cart from "../images/cart.svg";
import Profile from "../images/profile.svg";
const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='searchbar'>
				<input />
			</div>
			<div className='nav-menu'>
				<div className=''>PRODUCTS</div>
				<div className=''>MANUFACTURING</div>
				<div className=''>STORY</div>
				<div className=''>PACKAGING</div>
				<div className='cart-btn'>
					<img src={Cart} alt='cart' />
				</div>
				<div className='profile-btn'>
					<img src={Profile} alt='profile' />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
