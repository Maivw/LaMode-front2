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

export default function SearchScreen(props) {
	const products = useSelector((state) => state.productManagement.products);
	const getUrlParams = () => {
		const urlParams = new URLSearchParams(window.location.search);
		console.log("urlParams", urlParams.get("item"));
		const searchContent = urlParams.get("item");
		return searchContent;
	};
	const filteredByColor = products.filter((p) => p.color === getUrlParams());
	console.log("filteredByColor", filteredByColor);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts(products));
	}, []);
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{filteredByColor && (
				<GridList cellHeight={460} className={classes.gridList} cols={3}>
					{filteredByColor.map((product) => (
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
