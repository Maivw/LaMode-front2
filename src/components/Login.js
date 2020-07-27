import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/authentication";
import "../index.css";
import { Link, Redirect } from "react-router-dom";

export default function Login(props) {
	const [email, setEmail] = useState("DemoUser@demo.com");
	const [password, setPassword] = useState("password");
	const token = useSelector((state) => state.authentication.token);

	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(login({ email, password }));
	};

	const updateEmail = (e) => {
		setEmail(e.target.value);
	};
	const updatePassword = (e) => {
		setPassword(e.target.value);
	};
	if (token) {
		return <Redirect to="/" />;
	}
	return (
		<div className="login_page">
			<div>
				<form className="login-form" onSubmit={handleSubmit}>
					<h4>We are La_Mode</h4>
					<p>
						Welcome back! Log in to your account
						<br></br>
						to view our trending items.
					</p>

					<input
						className="in-form-field"
						type="text"
						name="email"
						placeholder="Email"
						value={email}
						onChange={updateEmail}
					/>

					<input
						className="in-form-field"
						type="password"
						name="password"
						placeholder="Password"
						value={password}
						onChange={updatePassword}
					/>
					<button color="primary">LOG IN</button>

					<h3>
						You need an account?{" "}
						<span>
							<Link className="sign-up" to="/signup">
								{" "}
								SIGNUP
							</Link>
						</span>
					</h3>
				</form>
			</div>
		</div>
	);
}
