import React from "react";
import "./Home.css";
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
			<div>
				<Link to="/products">
					<button className="shopNow_button">
						<strong>SHOP NOW</strong>
					</button>
				</Link>
			</div>
		</div>
	);
}
