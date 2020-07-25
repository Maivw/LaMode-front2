import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonToggle } from "reactstrap";
import { removeFromCart } from "../reducers/cartManagement";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { addQuantity, subQuantity } from "../reducers/cartManagement";

export default function CartScreen(props) {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.cartManagement.products);
	// const product = useSelector(
	// 	(state) => state.productManagement.currentProduct
	// );
	console.log("product11111", products);
	const handleRemoveFromCart = (p) => (p) => {
		dispatch(removeFromCart(p));
	};

	const handleAddQuantityInCart = (p) => () => {
		dispatch(addQuantity(p));
	};
	const handleSubQuantityInCart = (p) => () => {
		console.log("zzz", p);
		dispatch(subQuantity(p));
	};

	return (
		<div>
			<div>
				{products &&
					products.map((p) => (
						<ul key={p.id}>
							<img key={p.id} src={p.photo} alt={p.productName} />
							<p>
								<span>
									<AddIcon onClick={handleAddQuantityInCart(p)} />
								</span>
								<p>Quantity: {p.count}</p>

								<span>
									<RemoveIcon onClick={handleSubQuantityInCart(p)} />
								</span>
							</p>
							<p> </p>
							<p>
								{" "}
								<ButtonToggle color="success" onClick={handleRemoveFromCart(p)}>
									REMOVE
								</ButtonToggle>
							</p>
						</ul>
					))}
			</div>
		</div>
	);
}
