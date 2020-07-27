import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonToggle } from "reactstrap";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { removeFromCart } from "../reducers/cartManagement";

export default function FavoriteProducts(props) {
	const dispatch = useDispatch();
	const products = useSelector(
		(state) => state.cartManagement.favoriteProducts
	);

	console.log("p2222", products);
	const handleRemoveFromCart = (p) => () => {
		dispatch(removeFromCart(p));
	};

	return (
		<div>
			<div>
				{products &&
					products.map((p) => (
						<ul key={p.id}>
							<img key={p.id} src={p.photo} alt={p.productName} />
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
