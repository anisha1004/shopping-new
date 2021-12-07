import React from "react";
import "../css/Navbar.css";
import Cart from "../images/cart.svg";
import Profile from "../images/profile.svg";
import Search from "../images/search.svg";
const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='search'>
				<img src={Search} className='search-icon' />
				<input placeholder='Search store' className='searchbar' />
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
