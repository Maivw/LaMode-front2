import React from "react";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { Redirect } from "react-router-dom";

export default function Checkout(props) {
	const token = useSelector((state) => state.authentication.token);
	const products = useSelector((state) => state.cartManagement.products);
	let total = products
		.map((p) => p.count * p.price)
		.reduce(function (accumulator, currentValue, currentIndex, array) {
			return accumulator + currentValue;
		}, 0);

	let shippingFee = Math.ceil(total * 0.06);
	let totalOrder = total + shippingFee;
	let date = new Date();

	if (!token) {
		return <Redirect to="/login" />;
	}
	return (
		<>
			<Navbar />
			<div className="checkoutBox">
				<div style={{ backgroundColor: "black", height: 40 }}></div>
				<h1 style={{ textAlign: "center" }}>Order Summary</h1>
				<div>
					<div style={{ width: "50%", marginLeft: "5%" }}>Shipping to</div>

					<div style={{ width: "50%", marginLeft: "5%" }}>
						Delivery: within 48 hours
					</div>
					<hr />
					<div style={{ width: "50%", marginLeft: "5%" }}>
						Items <span>({products.length})</span>
					</div>
					<div style={{ display: "flex", flexDirection: "row" }}>
						<div style={{ width: "50%", marginLeft: "5%" }}>
							Total before tax
						</div>
						<div style={{ width: "50%", textAlign: "center" }}>${total}</div>
					</div>
					<div style={{ display: "flex", flexDirection: "row" }}>
						<div style={{ width: "50%", marginLeft: "5%" }}>Shipping fee</div>
						<div style={{ width: "50%", textAlign: "center" }}>
							${shippingFee}
						</div>
					</div>
					<div style={{ display: "flex", flexDirection: "row" }}>
						<h3 style={{ width: "50%", marginLeft: "5%" }}>
							Order total
							<span style={{ width: "50%", marginLeft: "5%" }}>
								${totalOrder}
							</span>
						</h3>
						<Button
							variant="contained"
							disabled
							style={{ alignSelf: "center", width: "40%", textAlign: "center" }}
						>
							Place your order
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
