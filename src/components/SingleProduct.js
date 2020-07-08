import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../reducers/productManagement";
import ReactImageMagnify from "react-image-magnify";
import "../index.css";
import { Link } from "react-router-dom";
import { ButtonToggle } from "reactstrap";

export default function SingleProduct(props) {
	const product = useSelector(
		(state) => state.productManagement.currentProduct
	);
	const { id } = props.match.params;
	console.log("Ccc", product);

	const dispatch = useDispatch();
	useEffect(() => {
		console.log("go here");
		dispatch(getOneProduct(id, product));
	}, []);

	return (
		<div>
			{product && (
				<div className="fluid">
					<div className="fluid__image-container">
						<ReactImageMagnify
							{...{
								smallImage: {
									alt: "Dress",
									isFluidWidth: true,
									src: `${product.photo}`,
								},
								largeImage: {
									src: `${product.photo}`,
									width: 1200,
									height: 1800,
								},
							}}
						/>
					</div>
					<div style={{ height: "500px" }} className="fluid__detail">
						<h2>Name:{product.productName}</h2>
						<p>Code: {product.productCode}</p>
						<p>Price: {product.price}</p>
						<p>Color: {product.color}</p>
						<p>Description: {product.description}</p>
						<p>
							{" "}
							<ButtonToggle color="success">ADD TO BAG</ButtonToggle>
						</p>
					</div>
				</div>
			)}
		</div>
	);
}
