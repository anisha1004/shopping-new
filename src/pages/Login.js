import React from "react";
import LoginI from "../images/login.svg";
import "../css/Login.css";
import Radio from "@mui/material/Radio";

const Login = () => {
	return (
		<div className='login'>
			<div className='login-left'>
				<div className='welcome'>WELCOME BACK</div>
				<div className='signup'>
					Don't have an account. <span className='yellow'>Sign up</span>
				</div>
				<div className='user'>
					<div className='username'>Username</div>
					<div>
						<input className='login-ip'></input>
					</div>
				</div>
				<div className='user'>
					<div className='username'>Password</div>
					<div>
						<input className='login-ip' type='password'></input>
					</div>
				</div>
				<div className='remember'>
					<div className='rem-radio'>
						<div>
							<Radio
								sx={{
									"& .MuiSvgIcon-root": {
										fontSize: 28,
										color: "#f4de4d",
									},
								}}
							/>
						</div>
						<div className='remember-me'>Remember me</div>
					</div>
					<div className='forget'>Forget Password?</div>
				</div>

				<div>
					<button className='signin'>SIGN IN</button>
				</div>
			</div>
			<div className='login-right'>
				<img src={LoginI} />
			</div>
		</div>
	);
};

export default Login;
