import React from "react";
import "../css/Register.css";
import R1 from "../images/r1.svg";
import R2 from "../images/r2.svg";
import R3 from "../images/r3.svg";
import R4 from "../images/r4.svg";

const Register = () => {
	return (
		<div className='register'>
			<div className='reg-up'>
				<div className='reg-heading'>JOIN THE CULT</div>
				<div className='login-cont'>
					<span className='already'> Already have an account. </span>
					<span className='login-text'>Log in</span>
				</div>
				<div className='reg-options'>
					<div className='reg-col'>
						<div className='user'>
							<div className='username'>First Name</div>
							<div>
								<input className='login-ip' type='text' />
							</div>
						</div>
						<div className='user'>
							<div className='username'>User Name</div>
							<div>
								<input className='login-ip' type='text' />
							</div>
						</div>
						<div className='user'>
							<div className='username'>Password</div>
							<div>
								<input className='login-ip' type='text' />
							</div>
						</div>
					</div>
					<div className='reg-col'>
						<div className='user'>
							<div className='username'>Last Name</div>
							<div>
								<input className='login-ip' type='text' />
							</div>
						</div>
						<div className='user'>
							<div className='username'>Email</div>
							<div>
								<input className='login-ip' type='text' />
							</div>
						</div>
						<div className='user'>
							<div className='username'>Confirm Password</div>
							<div>
								<input className='login-ip' type='text' />
							</div>
						</div>
					</div>
				</div>
				<div className='reg-btn-cont'>
					<button className='register-btn' type='submit'>
						REGISTER
					</button>
				</div>
			</div>
			<div className='reg-down'>
				<img src={R1} className='reg-circle-1' />
				<img src={R2} className='reg-circle-2' />
				<img src={R3} className='reg-circle-3' />
				<img src={R4} className='reg-circle-4' />
			</div>
		</div>
	);
};

export default Register;
