import React from "react";

import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Home(props) {
	return (
		<div>
			<Navbar />
			<div className="carousel_area">
				<Carousel />
			</div>
			<div className="shopNow_button">
				<Link to="/products">
					<button>SHOP NOW</button>
				</Link>
			</div>
		</div>
	);
}
