import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/authentication";
import "../index.css";
import { Link, Redirect } from "react-router-dom";

export default function Logout(props) {
	const token = useSelector((state) => state.authentication.token);
	const dispatch = useDispatch();

	const onLogout = (e) => {};

	return (
		<div>
			<button className="logout-button" onClick={onLogout}>
				LOGOUT
			</button>
		</div>
	);
}
