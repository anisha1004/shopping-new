import React, { useContext, useState } from "react";
import LoginI from "../images/login.svg";
import "../css/Login.css";
import Radio from "@mui/material/Radio";

import { Link, useNavigate } from "react-router-dom";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { AuthContext } from "../Context/auth";
import { useForm } from "../Utils/hooks";

const Login = () => {
	const [errors, setErrors] = useState([]);
	const navigate = useNavigate();
	const context = useContext(AuthContext);

	const initialState = {
		username: "",
		password: "",
	};

	const { onChange, onSubmit, values } = useForm(loggedUser, initialState);

	const [loginUser, { loading }] = useMutation(LOGIN_USER, {
		update(_, { data: { login: userData } }) {
			context.login(userData);
			navigate("/");
		},
		onError(err) {
			setErrors(err.graphQLErrors[0].extensions.errors);
		},
		variables: values,
	});

	function loggedUser() {
		loginUser();
	}

	return (
		<div className='login'>
			<div className='login-left'>
				<div className='welcome'>WELCOME BACK</div>
				<div className='signup'>
					Don't have an account. <span className='yellow'>Sign up</span>
				</div>
				<form onSubmit={onSubmit}>
					<div className='user'>
						<div className='username'>Username</div>
						<div>
							<input
								className='login-ip'
								type='text'
								name='username'
								value={values.username}
								onChange={onChange}></input>
						</div>
					</div>

					<div className='user'>
						<div className='username'>Password</div>
						<div>
							<input
								className='login-ip'
								type='password'
								name='password'
								value={values.password}
								onChange={onChange}></input>
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
						<button className='signin' type='submit'>
							{loading ? "LOADING" : "SIGN IN"}
						</button>
					</div>
				</form>
				{Object.keys(errors).length > 0 && (
					<div className='ui error message'>
						<div className='list'>
							{Object.values(errors).map((value) => (
								<li key={value}>{value}</li>
							))}
						</div>
					</div>
				)}
			</div>
			<div className='login-right'>
				<img src={LoginI} alt='loginImage' />
			</div>
		</div>
	);
};

export default Login;

const LOGIN_USER = gql`
	mutation login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			id
			email
			username
			createdAt
			token
		}
	}
`;
