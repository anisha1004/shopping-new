import React from "react";
import "../css/Homepage.css";
import I1 from "../images/i1.svg";
import I2 from "../images/i2.svg";
import I3 from "../images/i3.svg";
import I4 from "../images/i4.svg";

import G1 from "../images/g1.svg";
import G2 from "../images/g2.svg";
import G3 from "../images/g3.svg";
import G4 from "../images/g4.svg";

const Homepage = () => {
	return (
		<div className='home'>
			<div className='home-top'>
				<div className='home-top-left'>
					<img src={I1} className='test' alt='someImage' />
					<img src={I2} className='test' alt='someImage' />
				</div>
				<div className='home-top-right'>
					<img src={G1} alt='someImage' />
					<img src={G2} alt='someImage' />
				</div>
			</div>
			<div className='home-bottom'>
				<div className='home-bottom-left'>
					<img src={G3} alt='someImage' />
					<img src={G4} alt='someImage' />
				</div>
				<div className='home-bottom-right'>
					<img src={I3} className='test' alt='someImage' />
					<img src={I4} className='test' alt='someImage' />
				</div>
			</div>
		</div>
	);
};

export default Homepage;
