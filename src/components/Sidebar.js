import React from "react";
import "../css/Sidebar.css";
import NewIcon from "../images/new.svg";
const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='logo'>caped</div>

			<div className='side-up'>
				<div className='side-menu'>
					<div className='side-heading'>Explore</div>
					<div className='side-options'>
						<div className='soption'>
							<div className='icon'>
								<img src={NewIcon} alt='icon' />
							</div>
							<div>NEW IN </div>
						</div>
						<div className='soption'>
							<div className='icon'>
								<img src={NewIcon} alt='icon' />
							</div>
							<div>CLOTHING </div>
						</div>
						<div className='soption'>
							<div className='icon'>
								<img src={NewIcon} alt='icon' />
							</div>
							<div>FURNITURE </div>
						</div>
					</div>
				</div>
				<div className='help'>Help Center</div>
			</div>
		</div>
	);
};

export default Sidebar;
