import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CartScreen(props) {
	const product = useSelector((state) => state.cartManagement.addedProducts);
	console.log("product", product);
	return (
		<div>
			<h1>Shopping Cart</h1>
		</div>
	);
}
