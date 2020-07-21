import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
	filterProducts,
	filterProductsByPrice,
} from "../reducers/productManagement";

export default function FilterProducts(props) {
	const [selected, setSelected] = useState();
	const [sortBy, setSortBy] = useState();

	// using redux
	const [filterSort, setFilterSort] = useState({ filterBy: "", sortBy: "" });
	const size = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

	const dispatch = useDispatch();
	const filterProduct = (value) => () => {
		setFilterSort((prev) => ({ ...prev, filterBy: value }));
		dispatch(filterProducts({ ...filterSort, filterBy: value }));
	};
	const handleChangeSort = (e) => {
		e.persist();
		// console.log("e.", e.target.value);
		setFilterSort((prev) => ({ ...prev, sortBy: e.target.value }));
		dispatch(filterProducts({ ...filterSort, sortBy: e.target.value }));
	};

	useEffect(() => {
		props.filterSortAndFilter(filterSort);
	}, [filterSort]);

	// using props
	// const filterProduct = (value) => () => {
	// 	if (selected === value) {
	// 		setSelected("");
	// 		props.filterValue("");
	// 	} else {
	// 		setSelected(value);
	// 		props.filterValue(value);
	// 	}
	// };
	// const handleChangeSort = (e) => {
	// 	setSortBy(e.target.value);
	// 	props.filterPrice(e.target.value);
	// }
	return (
		<div className="d-flex">
			{size.map((e) => (
				<div
					onClick={filterProduct(e)}
					style={{
						marginRight: 10,
					}}
				>
					<div
						className="filterSize"
						style={{ backgroundColor: selected === e ? "white" : "lightGrey" }}
					>
						{e}
					</div>
				</div>
			))}
			<label htmlFor="price"></label>
			<select value={sortBy} onChange={handleChangeSort}>
				<option value="lowest">Lowest to Highest</option>
				<option value="highest">Highest to Lowest</option>
			</select>
		</div>
	);
}
