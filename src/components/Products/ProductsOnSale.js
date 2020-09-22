import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsOnSale } from "../../reducers/productManagement";
import { likeProudct } from "../../reducers/productManagement";
import "../../index.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/Star";
import Navbar from "../Navbar/Navbar";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper,
		marginTop: 10,
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
}));

export default function ProductOnSale(props) {
	const products = useSelector((state) => state.productManagement.products);
	const favProducts = useSelector(
		(state) => state.productManagement.favoriteProducts
	);
	const { promotion, category } = props.match.params;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProductsOnSale(promotion, category, products));
	}, [promotion, category]);
	const classes = useStyles();
	const handleLike = (product) => () => {
		dispatch(likeProudct(product));
	};
	return (
		<>
			<Navbar />
			<div className={classes.root}>
				{products && (
					<GridList cellHeight={460} className={classes.gridList} cols={3}>
						{products.map((product) => {
							const fav = favProducts.find((f) => f.id === product.id);
							return (
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
												className={classes.title}
											>
												<StarIcon
													className={classes.title}
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
		</>
	);
}