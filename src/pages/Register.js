import React, { useContext, useState } from "react";
import "../css/Register.css";
import R1 from "../images/r1.svg";
import R2 from "../images/r2.svg";
import R3 from "../images/r3.svg";
import R4 from "../images/r4.svg";

import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { AuthContext } from "../Context/auth";
import { useForm } from "../Utils/hooks";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
	const [errors, setErrors] = useState([]);
	const navigate = useNavigate();
	const context = useContext(AuthContext);

	const initialState = {
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	};

	const { onChange, onSubmit, values } = useForm(registerUser, initialState);
	console.log(values);
	const [addUser, { loading }] = useMutation(REGISTER_USER, {
		update(_, { data: { register: userData } }) {
			context.login(userData);
			navigate("/");
		},
		onError(err) {
			setErrors(err.graphQLErrors[0].extensions.errors);
		},
		variables: values,
	});

	function registerUser() {
		addUser();
	}

	return (
		<div className='register'>
			<div className='reg-up'>
				<div className='reg-heading'>JOIN THE CULT</div>
				<div className='login-cont'>
					<span className='already'> Already have an account. </span>
					<span className='login-text'>Log in</span>
				</div>
				<form onSubmit={onSubmit}>
					<div className='reg-options'>
						<div className='reg-col'>
							<div className='user'>
								<div className='username'>First Name</div>
								<div>
									<input
										className='login-ip'
										type='text'
										name='firstName'
										placeholder='First Name'
										value={values.firstName}
										onChange={onChange}
									/>
								</div>
							</div>
							<div className='user'>
								<div className='username'>User Name</div>
								<div>
									<input
										className='login-ip'
										type='text'
										name='username'
										placeholder='Username'
										value={values.username}
										onChange={onChange}
									/>
								</div>
							</div>
							<div className='user'>
								<div className='username'>Password</div>
								<div>
									<input
										className='login-ip'
										type='password'
										name='password'
										placeholder='Password'
										value={values.password}
										onChange={onChange}
									/>
								</div>
							</div>
						</div>
						<div className='reg-col'>
							<div className='user'>
								<div className='username'>Last Name</div>
								<div>
									<input
										className='login-ip'
										type='text'
										name='lastName'
										placeholder='Last Name'
										value={values.lastName}
										onChange={onChange}
									/>
								</div>
							</div>
							<div className='user'>
								<div className='username'>Email</div>
								<div>
									<input
										className='login-ip'
										type='text'
										name='email'
										placeholder='Email'
										value={values.email}
										onChange={onChange}
									/>
								</div>
							</div>
							<div className='user'>
								<div className='username'>Confirm Password</div>
								<div>
									<input
										className='login-ip'
										type='password'
										name='confirmPassword'
										placeholder='Confirm Password'
										value={values.confirmPassword}
										onChange={onChange}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className='reg-btn-cont'>
						<button className='register-btn' type='submit'>
							{loading ? "REGISTERING YOU!" : "REGISTER"}
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
			<div className='reg-down'>
				<img src={R1} className='reg-circle-1' alt='imgIcon' />
				<img src={R2} className='reg-circle-2' alt='imgIcon' />
				<img src={R3} className='reg-circle-3' alt='imgIcon' />
				<img src={R4} className='reg-circle-4' alt='imgIcon' />
			</div>
		</div>
	);
};

export default Register;

const REGISTER_USER = gql`
	mutation register(
		$firstName: String!
		$lastName: String!
		$username: String!
		$email: String!
		$password: String!
		$confirmPassword: String!
	) {
		register(
			registerInput: {
				firstName: $firstName
				lastName: $lastName
				username: $username
				email: $email
				password: $password
				confirmPassword: $confirmPassword
			}
		) {
			id
			email
			username
			createdAt
			token
		}
	}
`;
