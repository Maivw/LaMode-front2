import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Navbar from "../Navbar/Navbar";
import { Redirect } from "react-router-dom";
import Payment from "./Payment";
import { checkout } from "../../reducers/payment";
import { removeAllCart } from "../../reducers/cartManagement";
import Thankyou from "./Thankyou";
import "./checkout.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));

export default function Checkout(props) {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const [spacing, setSpacing] = React.useState(2);
	const classes = useStyles();
	const userId = useSelector((state) => state.authentication.user.id);
	const token = useSelector((state) => state.authentication.token);
	const products = useSelector((state) => state.cartManagement.products);
	const [shippingAddress, setShippingAddress] = useState("");
	const onChangeShippingAddress = (e) => {
		e.preventDefault();
		setShippingAddress(e.target.value);
	};
	const [showPaypalButton, setShowPaypalButton] = useState(false);
	const handleCheckout = () => {
		setShowPaypalButton(true);
	};

	const paymentHandler = (details) => {
		dispatch(
			checkout({
				payerId: details.payer.payer_id,
				userId,
				emailAddress: details.payer.email_address,
				amount: details.purchase_units[0].amount.value,
				currentcyCode: details.purchase_units[0].amount.currency_code,
				payerName:
					details.payer.name.given_name + " " + details.payer.name.surname,
				shippingAddress,
			})
		);
		alert(
			`Transaction completed by ${details.payer.name.given_name}. Products will be delivered to ${shippingAddress}`
		);
		setShowPaypalButton(false);
		setOpen(true);
		dispatch(removeAllCart());
	};
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
	const onCloseThankyouModal = () => {
		setOpen(false);
	};
	return (
		<div onClick={onCloseThankyouModal}>
			<Navbar />
			{/* {showPaypalButton && (
				<Payment
					amount={totalOrder}
					currency={"USD"}
					onSuccess={paymentHandler}
				/>
			)} */}

			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
				spacing={2}
				xs={12}
				sm={12}
				md={12}
				lg={12}
			>
				<div className="checkoutBox">
					<div style={{ backgroundColor: "black", height: 40 }}></div>
					<h1 style={{ textAlign: "center" }}>Order Summary</h1>
					<div>
						<div style={{ width: "50%", marginLeft: "5%" }}>
							Shipping to:
							<input
								style={{ width: "175%", height: 30 }}
								type="text"
								placeholder="Type location"
								name="shippingAddress"
								value={shippingAddress}
								onChange={onChangeShippingAddress}
							/>
						</div>

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

						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "center",
							}}
						>
							<div>
								<h3>
									Order total
									<span style={{ width: "50%" }}>${totalOrder}</span>
								</h3>
							</div>
							<div>
								<Thankyou open={open} onClose={onCloseThankyouModal} />
								{showPaypalButton && (
									<Payment
										amount={totalOrder}
										currency={"USD"}
										onSuccess={paymentHandler}
									/>
								)}
							</div>
							<Button
								variant="contained"
								onClick={handleCheckout}
								style={{
									alignSelf: "center",
									width: "40%",
									textAlign: "center",
								}}
							>
								Place your order
							</Button>
						</div>
					</div>
				</div>
			</Grid>
		</div>
	);
}
