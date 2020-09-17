import React from "react";

import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Home(props) {
	return (
		<div>
			<Navbar />
			<div className="carousel_area">
				<Carousel />
			</div>
			<div className="shopNow_button">
				<Link to="/products">
					<button
						style={{ width: 120, height: 40, borderRadius: 5, boder: "none" }}
					>
						<strong>SHOP NOW</strong>
					</button>
				</Link>
			</div>
		</div>
	);
}
