import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../reducers/productManagement";
import "../index.css";
import { Link } from "react-router-dom";

export default function AllProducts(props) {
	const products = useSelector((state) => state.productManagement.products);

	const dispatch = useDispatch();
	useEffect(() => {
		console.log("go here");
		dispatch(getProducts(products));
	}, []);

	return (
		<div>
			{products && (
				<ul>
					{products.map((product) => (
						<li>{product.productName}</li>
					))}
				</ul>
			)}
		</div>
	);
}
