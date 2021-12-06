import React from "react";
import LoginI from "../images/login.svg";
import "../css/Login.css";

const Login = () => {
	return (
		<div className='login'>
			<div className='login-left'>
				<div className='welcome'>WELCOME BACK</div>
				<div className='signup'>
					Don't have an account. <span className='yellow'>Sign up</span>
				</div>
				<div className='user'>
					Username
					<div>
						<input className='login-ip'></input>
					</div>
				</div>
				<div className='user'>
					Password
					<div>
						<input className='login-ip'></input>
					</div>
				</div>
				<div>Remember me</div>
				<div>
					<button className='signin'>SIGN IN</button>
				</div>
			</div>
			<div>
				<img src={LoginI} />
			</div>
		</div>
	);
};

export default Login;
