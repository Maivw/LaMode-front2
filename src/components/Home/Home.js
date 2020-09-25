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
				<h2 style={{ color: "white", backgroundColor: "black" }}>
					Coming soon ...
				</h2>
				<Grid container direction="row" justify="center" alignItems="center">
					<Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
						<Collection />
					</Grid>
					<Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
						<CollectionWinter />
					</Grid>
					<Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
						<CollectionMen />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}
