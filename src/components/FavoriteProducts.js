import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../reducers/cartManagement";
import { removeFromFavList } from "../reducers/productManagement";
import Navbar from "./Navbar";
import DeleteIcon from "@material-ui/icons/Delete";

export default function FavoriteProducts(props) {
	const dispatch = useDispatch();
	const [count, setCount] = useState(1);
	const products = useSelector(
		(state) => state.productManagement.favoriteProducts
	);

	const handleRemoveFromFavList = (p) => () => {
		dispatch(removeFromFavList(p));
	};
	const insertItemIntoCart = (p, count) => () => {
		dispatch(addToCart(p, count));
	};

	return (
		<div>
			<Navbar />
			<div>
				{products &&
					products.map((p) => (
						<ul key={p.id}>
							<img key={p.id} src={p.photo} alt={p.productName} />
							<p>
								<button onClick={insertItemIntoCart(p, count)}>ADD</button>
							</p>
							<p>
								<DeleteIcon onClick={handleRemoveFromFavList(p)} />
							</p>
						</ul>
					))}
			</div>
		</div>
	);
}
