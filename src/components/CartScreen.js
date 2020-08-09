import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../reducers/cartManagement";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { addQuantity, subQuantity } from "../reducers/cartManagement";

export default function CartScreen(props) {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.cartManagement.products);

	const handleRemoveFromCart = (p) => () => {
		dispatch(removeFromCart(p));
	};

	const handleAddQuantityInCart = (p) => () => {
		dispatch(addQuantity(p));
	};
	const handleSubQuantityInCart = (p) => () => {
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
								<button color="success" onClick={handleRemoveFromCart(p)}>
									REMOVE
								</button>
							</p>
						</ul>
					))}
			</div>
		</div>
	);
}
