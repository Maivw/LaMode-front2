import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../reducers/productManagement";
import "../index.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

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
	gridListTile: {
		marginBottom: 50,
	},
	link: {
		textDecoration: "none",
		color: "#07ad90",
		fontSize: "14px",
	},
	gridListTileBar: {
		width: "83%",
	},
}));

export default function AllProducts(props) {
	const products = useSelector((state) => state.productManagement.products);

	const dispatch = useDispatch();
	useEffect(() => {
		console.log("go here");
		dispatch(getProducts(products));
	}, []);
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{products && (
				<GridList cellHeight={460} className={classes.gridList} cols={3}>
					{products.map((product) => (
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
