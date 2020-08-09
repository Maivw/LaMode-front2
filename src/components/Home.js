import React from "react";

import Carousel from "./Carousel";
import { Link } from "react-router-dom";

export default function Home(props) {
	return (
		<div>
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
