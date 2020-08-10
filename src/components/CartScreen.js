import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../reducers/cartManagement";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { addQuantity, subQuantity } from "../reducers/cartManagement";
import Navbar from "./Navbar";
import DeleteIcon from "@material-ui/icons/Delete";

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
			<Navbar />

			{products ? (
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
							<DeleteIcon onClick={handleRemoveFromCart(p)} />
						</p>
					</ul>
				))
			) : (
				<h1 style={{ marginTop: 200 }}>Your cart is empty!</h1>
			)}
		</div>
	);
}
