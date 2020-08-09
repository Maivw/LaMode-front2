import React from "react";
import Slider from "react-slick";

export default function Carousel(props) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div
			style={{
				height: "300px",
				alignItems: "center",
				margin: "auto",
			}}
		>
			<Slider {...settings}>
				<div>
					<img
						src="https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						style={{
							height: "300px",
							alignItems: "center",
							margin: "auto",
						}}
					/>
				</div>
				<div>
					<img
						src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						style={{
							height: "300px",
							alignItems: "center",
							margin: "auto",
						}}
					/>
				</div>
				<div>
					<img
						src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						style={{
							height: "300px",
							alignItems: "center",
							margin: "auto",
						}}
					/>
				</div>
				<div>
					<img
						src="https://images.pexels.com/photos/3462163/pexels-photo-3462163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						style={{
							height: "300px",
							alignItems: "center",
							margin: "auto",
						}}
					/>
				</div>
			</Slider>
		</div>
	);
}
