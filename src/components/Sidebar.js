import React from "react";
import "../css/Sidebar.css";
import Logo from "../images/logo.svg";
import NewIcon from "../images/new.svg";
import Clothing from "../images/clothing.svg";
import Shoes from "../images/shoes.svg";
import Accessories from "../images/accessories.svg";
import Activewear from "../images/activewear.svg";
import Gifts from "../images/gifts.svg";
import Inspiration from "../images/inspiration.svg";

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='logo'>
				<img src={Logo} className='logo-img' />
			</div>

			<div className='side-up'>
				<div className='side-menu'>
					<div className='side-heading'>Explore</div>
					<div className='side-options'>
						<div className='soption'>
							<div className='icon'>
								<img src={NewIcon} alt='icon' />
							</div>
							<div>New In </div>
						</div>
						<div className='soption'>
							<div className='icon'>
								<img src={Clothing} alt='icon' />
							</div>
							<div>Clothing </div>
						</div>

						<div className='soption'>
							<div className='icon'>
								<img src={Shoes} alt='icon' />
							</div>
							<div>Shoes </div>
						</div>
						<div className='soption'>
							<div className='icon'>
								<img src={Accessories} alt='icon' />
							</div>
							<div>Accessories </div>
						</div>
						<div className='soption'>
							<div className='icon'>
								<img src={Activewear} alt='icon' />
							</div>
							<div>Activewear </div>
						</div>
						<div className='soption'>
							<div className='icon'>
								<img src={Gifts} alt='icon' />
							</div>
							<div>Gifts and Living </div>
						</div>
						<div className='soption'>
							<div className='icon'>
								<img src={Inspiration} alt='icon' />
							</div>
							<div>Inspiration </div>
						</div>
					</div>
				</div>
				<div className='help'>Help Center</div>
			</div>
		</div>
	);
};

export default Sidebar;
