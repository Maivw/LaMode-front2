import React from "react";
import Slider from "react-slick";
import { Link, useHistory } from "react-router-dom";
import "./Carousel.css";

export default function Carousel() {
	const history = useHistory();
	const showWomenDresses = () => {
		history.push("/productlist/dresses");
	};
	const showWomenLingerie = () => {
		history.push("/productlist/lingerie");
	};
	const showGirlsSwearshirt = () => {
		history.push("/productlist/swearshirt");
	};
	const showGirlDresses = () => {
		history.push("/productlist/kid-dresses");
	};
	const showGirlTops = () => {
		history.push("/productlist/tops");
	};
	const showMenTShirt = () => {
		history.push("/productlist/graphictee");
	};
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: 0,
					dots: true,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div>
			<Slider {...settings}>
				<div className="carousel__image" onClick={showWomenDresses}>
					<img src="https://kenh14cdn.com/2020/9/14/119476839102250700859626007612681108879281982o-16000522362502044853277.jpg" />
				</div>
				<div className="carousel__image" onClick={showMenTShirt}>
					<img src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?cs=srgb&dl=pexels-spencer-selover-428340.jpg&fm=jpg" />
				</div>

				<div className="carousel__image" onClick={showWomenLingerie}>
					<img src="https://www.wallpaperup.com/uploads/wallpapers/2014/07/17/397935/ec2a21808bbde62bbd5f4c28bc0f73ba-1400.jpg" />
				</div>
				<div className="carousel__image" onClick={showGirlsSwearshirt}>
					<img src="https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?cs=srgb&dl=pexels-bess-hamiti-35188.jpg&fm=jpg" />
				</div>
				<div className="carousel__image" onClick={showGirlDresses}>
					<img src="https://images.pexels.com/photos/4711724/pexels-photo-4711724.jpeg?cs=srgb&dl=pexels-cottonbro-4711724.jpg&fm=jpg" />
				</div>
				<div className="carousel__image" onClick={showGirlTops}>
					<img src="https://afamilycdn.com/2017/img20170906143707368.jpg" />
				</div>
			</Slider>
		</div>
	);
}
