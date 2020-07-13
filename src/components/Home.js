import React from "react";

import Carousel from "./Carousel";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

import { ButtonToggle } from "reactstrap";

export default function Home(props) {
	return (
		<div>
			<Navbar />
			<div className="carousel_area">
				<Carousel />
			</div>
			<div className="shopNow_button">
				<Link to="/products">
					<ButtonToggle color="secondary">SHOP NOW</ButtonToggle>
				</Link>
			</div>
		</div>
	);
}
