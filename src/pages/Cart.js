import React from "react";
import "../css/Cart.css";
import Cartrow from "../components/Cartrow.js";

const cart = () => {
	return (
		<div>
			<div>
				<img />
			</div>
			<Cartrow />

			<div>
				<button>PLACE ORDER</button>
			</div>
		</div>
	);
};

export default cart;
