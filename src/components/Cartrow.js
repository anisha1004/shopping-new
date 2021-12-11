import React from "react";
import "../css/Cartrow.css";
import Item1 from "../images/item1.svg";
import Plus from "../images/plus.svg";
import Minus from "../images/minus.svg";
import Delete from "../images/delete.svg";
import Line from "../images/line.svg";

const Cartrow = () => {
	return (
		<div className='cartrow'>
			{/* <div className='item'>
				<div className='item-left'>
					<img src={Item1} />
					<div className='details'>
						<div className='name'>Watch</div>
						<div className='price'>&#8377;1000</div>
					</div>
				</div>
				<div className='item-right'>
					<div className='quantity'>
						<button>+</button>
						<button>-</button>
					</div>
					<div className='total'>&#8377;2000</div>
					<div className='delete'>
						<img src={Delete} />
					</div>
				</div>
			</div> */}
			<div className='item'>
				<div className='item-left'>
					<img src={Item1} className='obj-img' alt='products' />
				</div>
				<div className='item-right'>
					<div className='row-1'>
						<div className='name'>Watch</div>
					</div>
					<div className='row-2'>
						<div className='price'>&#8377;1000</div>
						<div className='row-2-right'>
							<img src={Minus} className='plus' alt='minus' />
							<span>2</span>
							<img src={Plus} className='plus' alt='plus' />

							<div className='total'>&#8377;2000</div>
							<div className='delete'>
								<img src={Delete} className='plus' alt='delete' />
							</div>
						</div>
					</div>
				</div>
			</div>
			<img src={Line} alt='horizontal line' />
		</div>
	);
};

export default Cartrow;
