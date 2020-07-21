import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CartScreen(props) {
	const products = useSelector((state) => state.cartManagement.products);
	console.log("product11111", products);
	return (
		<div>
			<h1>Shopping Cart</h1>
		</div>
	);
}
