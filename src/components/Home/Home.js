import React from "react";
import "./Home.css";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Collection from "./CollectionFall";
import CollectionWinter from "./CollectionWinter";
import CollectionMen from "./CollectionMen";
import Grid from "@material-ui/core/Grid";

export default function Home(props) {
	return (
		<div>
			<Navbar />
			<div className="carousel_area">
				<Carousel />
			</div>
			<div>
				<Link to="/products">
					<button className="shopNow_button">
						<strong>SHOP NOW</strong>
					</button>
				</Link>
			</div>
			<div style={{ width: "100%" }}>
				<h2 style={{ color: "white", backgroundColor: "black", margiTop: 20 }}>
					Coming soon ...
				</h2>
				<Grid container direction="row" justify="center" alignItems="center">
					<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
						<Collection />
					</Grid>
					<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
						<CollectionWinter />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}
