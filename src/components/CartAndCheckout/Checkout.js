import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Navbar from "../Navbar/Navbar";
import { useHistory } from "react-router-dom";
import Payment from "./Payment";
import { checkout } from "../../reducers/payment";
import { removeAllCart } from "../../reducers/cartManagement";
import Thankyou from "./Thankyou";
import "./checkout.css";
import Grid from "@material-ui/core/Grid";

export default function Checkout(props) {
	const history = useHistory();
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const token = useSelector((state) => state.authentication.token);
	const userId = useSelector((state) => state.authentication.user.id);

	const products = useSelector((state) => state.cartManagement.products);
	const [shippingAddress, setShippingAddress] = useState("");
	const onChangeShippingAddress = (e) => {
		e.preventDefault();
		setShippingAddress(e.target.value);
	};
	const [showPaypalButton, setShowPaypalButton] = useState(false);
	const handleCheckout = () => {
		if (!token) {
			history.push("/login");
		}
		setShowPaypalButton(true);
	};

	const paymentHandler = (details) => {
		if (details.status !== "COMPLETED") {
			return;
		}
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
	const getsShippingFee = () => {
		if (total >= 50) return 0;

		return 10;
	};
	let totalOrder = total + getsShippingFee();
	let date = new Date();

	const onCloseThankyouModal = () => {
		setOpen(false);
	};
	return (
		<div onClick={onCloseThankyouModal}>
			<Navbar />

			<Grid
				container
				justify="center"
				alignItems="center"
				spacing={2}
				xs={12}
				sm={12}
				md={12}
				lg={12}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignSelf: "center",
					}}
				>
					<Thankyou open={open} onClose={onCloseThankyouModal} />
				</div>
				<div className="checkoutBox">
					<div style={{ backgroundColor: "black", height: 40 }}></div>
					<h1 style={{ textAlign: "center" }}>Order Summary</h1>
					<h3 style={{ textAlign: "center" }}>Free shipping at $50</h3>
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
								${getsShippingFee()}
							</div>
						</div>

						<Grid container>
							<Grid item justify="flex-start" xs={4}>
								<Button
									variant="contained"
									onClick={handleCheckout}
									style={{
										alignSelf: "center",
										textAlign: "center",
										marginLeft: "15%",
										marginTop: 15,
									}}
								>
									Place your order
								</Button>
							</Grid>

							<Grid item direction="row" justify="center" xs={4}>
								<h3>
									Order total
									<span style={{ width: "50%" }}>${totalOrder}</span>
								</h3>
							</Grid>

							{showPaypalButton ? (
								<Grid item direction="row" xs={4}>
									<div style={{ marginRight: "15%", padding: 15 }}>
										<Payment
											amount={totalOrder}
											currency={"USD"}
											onSuccess={paymentHandler}
										/>
									</div>
								</Grid>
							) : (
								<Grid item direction="row" justify="center" xs={4}></Grid>
							)}
						</Grid>
						{/* </div> */}
					</div>
				</div>
			</Grid>
		</div>
	);
}
