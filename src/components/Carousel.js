import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
	{
		src:
			"https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		// altText: "Slide 1",
		// caption: "Slide 1",
		// header: "Slide 1 Header",
		key: "1",
	},
	{
		src:
			"https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		// altText: "Slide 2",
		// // caption: "Slide 2",
		// header: "Slide 2 Header",
		key: "2",
	},
	{
		src:
			"https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		// altText: "Slide 3",
		// caption: "Slide 3",
		// header: "Slide 3 Header",
		key: "3",
	},
	{
		src:
			"https://images.pexels.com/photos/3462163/pexels-photo-3462163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		key: "4",
	},
];

export default function Carousel(props) {
	return <UncontrolledCarousel items={items} />;
}
