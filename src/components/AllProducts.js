import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../reducers/productManagement";
import "../index.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
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
	addToCartButton: {
		margin: "20px",
		borderRadius: "10px",
		backgroundColor: "#1b5e20",
		color: "white",
		fontWeight: "400",
		paddingTop: "5px",
		paddingBottom: "5px",
		paddingLeft: "10px",
		paddingRight: "10px",
		display: "flex",
		justifyContent: "cener",
	},
	customGlTitleBar: {
		backgroundColor: "white",
		display: "flex",
		justifyContent: "center",
		alignItem: "cener",
		marginRight: "60px",
	},
	link: {
		textDecoration: "none",
		color: "#07ad90",
		fontSize: "14px",
	},
}));

export default function AllProducts(props) {
	const products = useSelector((state) => state.productManagement.products);

	const dispatch = useDispatch();
	useEffect(() => {
		console.log("go here");
		dispatch(getProducts(products));
	}, []);

	return (
		<div>
			{products && (
				<ul>
					{products.map((product) => (
						<li>{product.productName}</li>
					))}
				</ul>
			)}
		</div>
	);
}
