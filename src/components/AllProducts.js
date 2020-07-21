import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../reducers/productManagement";
import "../index.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import FilterProducts from "./FilterProducts";
import _ from "lodash";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		marginLeft: "15%",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		width: 1100,
		height: "auto",
	},
	icon: {
		color: "rgba(255, 255, 255, 0.54)",
	},
	productImgs: {
		width: 300,
		height: "auto",
		borderRadius: "10px",
	},
	gridListTile: {
		marginBottom: 50,
	},
	link: {
		textDecoration: "none",
		color: "#07ad90",
		fontSize: "14px",
	},
	gridListTileBar: {
		width: "82.5%",
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
	},
}));

export default function AllProducts(props) {
	const [filterValue, setFilterValue] = useState("");
	const [sortBy, setSortBy] = useState("lowest");
	const [filterAndSort, setFilterAndSort] = useState({});
	const products = useSelector((state) => state.productManagement.products);
	const filtered = useSelector((state) => state.productManagement.filtered);
	// console.log("filteredcc", filtered);
	const renderProducts =
		filterAndSort.filterBy || filterAndSort.sortBy ? filtered : products;
	// const renderProducts = !_.isEmpty(filterAndSort) ? filtered : products; // {a: ''}
	// console.log("renderProducts", renderProducts);
	// Redux

	//Using Props
	// const renderProducts = (products || [])
	// 	.filter((p) => (filterValue ? p.availableSize.includes(filterValue) : p))
	// 	.sort((a, b) =>
	// 		sortBy === "lowest" ? a.price - b.price : b.price - a.price
	// 	);
	// console.log("renderProducts", renderProducts);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts(products));
	}, []);
	const classes = useStyles();

	const onFilter = (value) => setFilterValue(value);
	const onFilterByPrice = (sort) => setSortBy(sort);
	const onFilterAndSort = (sortFilter) => setFilterAndSort(sortFilter);

	return (
		<div className={classes.root}>
			<div style={{ margin: "2% 0" }}>
				<h5>Filter Products</h5>
				<FilterProducts
					filterValue={onFilter}
					filterPrice={onFilterByPrice}
					filterSortAndFilter={onFilterAndSort}
				/>
			</div>
			{renderProducts && (
				<GridList cellHeight={460} className={classes.gridList} cols={3}>
					{renderProducts.map((product) => (
						<GridListTile
							className={classes.gridListTile}
							key={product.id}
							cols={product.cols || 1}
						>
							<Link className={classes.link} to={`/products/${product.id}`}>
								<img
									className={classes.productImgs}
									src={product.photo}
									alt={product.photo}
								/>
								<GridListTileBar
									className={classes.gridListTileBar}
									title={<span>price: ${product.price}</span>}
								/>
							</Link>
						</GridListTile>
					))}
				</GridList>
			)}
		</div>
	);
}
