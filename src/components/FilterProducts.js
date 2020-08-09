import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../reducers/productManagement";

export default function FilterProducts(props) {
	const [selected, setSelected] = useState();
	const [sortBy, setSortBy] = useState();

	const [filterSort, setFilterSort] = useState({ filterBy: "", sortBy: "" });
	const size = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

	const dispatch = useDispatch();
	const filterProduct = (value) => () => {
		setFilterSort((prev) => ({ ...prev, filterBy: value }));
		dispatch(filterProducts({ ...filterSort, filterBy: value }));
	};
	const handleChangeSort = (e) => {
		e.persist();
		setFilterSort((prev) => ({ ...prev, sortBy: e.target.value }));
		dispatch(filterProducts({ ...filterSort, sortBy: e.target.value }));
	};

	useEffect(() => {
		props.filterSortAndFilter(filterSort);
	}, [filterSort]);
	return (
		<div className="filterBar">
			<div className="filBySize">
				{size.map((e) => (
					<div
						onClick={filterProduct(e)}
						style={{
							marginRight: 10,
						}}
						key={e.id}
					>
						<div
							className="filterSize"
							style={{
								backgroundColor: selected === e ? "red" : "lightGrey",
							}}
						>
							{e}
						</div>
					</div>
				))}
			</div>
			<div className="filByPrice">
				<label htmlFor="price"></label>
				<select value={sortBy} onChange={handleChangeSort}>
					<option value="lowest">Lowest to Highest</option>
					<option value="highest">Highest to Lowest</option>
				</select>
			</div>
		</div>
	);
}
