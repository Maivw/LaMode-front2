import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../reducers/productManagement";
import { likeProudct } from "../../reducers/productManagement";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import FilterProducts from "./FilterProducts";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/Star";
import Navbar from "../Navbar/Navbar";
import Paginations from "./Pagination";
import Typography from "@material-ui/core/Typography";

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
		borderRadius: "10px",
	},
	icon: {
		color: "rgba(255, 255, 255, 0.54)",
	},
	productImgs: {
		width: 300,
		height: "auto",
		objectFit: "cover",
		borderRadius: 10,
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
		backgroundColor: "transparent",
	},
	title: {
		color: theme.palette.primary.light,
		position: "absolute",
		right: "40px",
		top: "210px",
	},
	pag: {
		"& > *": {
			marginTop: theme.spacing(2),
		},
	},
}));

export default function AllProducts(props) {
	const [filterValue, setFilterValue] = useState("");
	const [sortBy, setSortBy] = useState("lowest");
	const [filterAndSort, setFilterAndSort] = useState({});
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(9);

	const products = useSelector((state) => state.productManagement.products);
	const filtered = useSelector((state) => state.productManagement.filtered);
	const favProducts = useSelector(
		(state) => state.productManagement.favoriteProducts
	);
	const renderProducts =
		filterAndSort.filterBy || filterAndSort.sortBy ? filtered : products;

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts(products));
	}, []);
	const classes = useStyles();

	const onFilter = (value) => setFilterValue(value);
	const onFilterByPrice = (sort) => setSortBy(sort);
	const onFilterAndSort = (sortFilter) => setFilterAndSort(sortFilter);
	const handleLike = (product) => () => {
		dispatch(likeProudct(product));
	};

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	return (
		<div>
			<Navbar />
			<div className={classes.root}>
				<div className="paginationBox">
					<Typography className="pageText">Page: {currentPage}</Typography>
					<Paginations
						itemsPerPage={itemsPerPage}
						totalItems={products.length}
						paginate={paginate}
					/>
				</div>
				<div
					style={{
						marginRight: "60%",
						position: "absolute",
					}}
				>
					<h3>Filter Products</h3>
					<FilterProducts
						filterValue={onFilter}
						filterPrice={onFilterByPrice}
						filterSortAndFilter={onFilterAndSort}
					/>
				</div>
				<div style={{ marginTop: "5%" }}>
					{currentItems && (
						<GridList cellHeight={460} className={classes.gridList} cols={3}>
							{currentItems.map((product) => {
								const fav = favProducts.find((f) => f.id === product.id);
								return (
									<GridListTile
										className={classes.gridListTile}
										key={product.id}
										cols={product.cols || 1}
									>
										<Link
											className={classes.link}
											to={`/products/${product.id}`}
										>
											<img
												className={classes.productImgs}
												src={product.photo}
												alt={product.photo}
											/>
										</Link>

										<GridListTileBar
											className={classes.gridListTileBar}
											title={
												<strong>
													<span style={{ color: "#424242" }}>
														${product.price}
													</span>
												</strong>
											}
											actionIcon={
												<IconButton
													aria-label={`star `}
													className={classes.icon}
												>
													<StarIcon
														style={{ color: fav ? "black" : "#bdbdbd" }}
														onClick={handleLike(product)}
													/>
												</IconButton>
											}
										/>
									</GridListTile>
								);
							})}
						</GridList>
					)}
				</div>
			</div>
		</div>
	);
}
