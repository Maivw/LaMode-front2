import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/authentication";
import "../index.css";
import { Link } from "react-router-dom";

export default function LogoutButton(props) {
	const token = useSelector((state) => state.authentication.token);
	const dispatch = useDispatch();
	if (!token) {
		return null;
	}

	const onLogout = (e) => {
		dispatch(logout());
		e.preventDefault();
		// props.history.push("/login");
	};

	return (
		<div>
			<button className="logout-button" onClick={onLogout}>
				LOGOUT
			</button>
		</div>
	);
}
