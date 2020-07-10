import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../reducers/productManagement";
import ReactImageMagnify from "react-image-magnify";
import "../index.css";
import { Link } from "react-router-dom";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import {
	ButtonToggle,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "reactstrap";

export default function SingleProduct(props) {
	const product = useSelector(
		(state) => state.productManagement.currentProduct
	);
	const { id } = props.match.params;
	const [modal, setModal] = useState(false);

	const dispatch = useDispatch();
	useEffect(() => {
		console.log("go here");
		dispatch(getOneProduct(id, product));
	}, []);
	const toggle = () => setModal(!modal);
	const showModal = () => {
		setModal(true);
	};

	return (
		<div>
			{product && (
				<div>
					<Modal isOpen={modal} toggle={toggle}>
						{/* <ModalHeader toggle={toggle}></ModalHeader> */}

						<img src={product.photo} alt="image" style={{ width: 600 }} />
					</Modal>
				</div>
			)}
			{product && (
				<div className="fluid">
					<div className="fluid__image-container">
						<ReactImageMagnify
							{...{
								smallImage: {
									alt: "Dress",
									isFluidWidth: true,
									src: `${product.photo}`,
								},
								largeImage: {
									src: `${product.photo}`,
									width: 1200,
									height: 1800,
								},
							}}
						/>
						<p className="enlargeImage" onClick={showModal}>
							Click here to enlarge the image
							<span style={{ marginLeft: 10 }}>
								{/* <svg
									width="1em"
									height="1em"
									viewBox="0 0 16 16"
									class="bi bi-zoom-in"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
									/>
									<path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />
									<path
										fill-rule="evenodd"
										d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
									/>
								</svg> */}
								<ZoomInIcon />
							</span>
						</p>
					</div>
					<div style={{ height: "500px" }} className="fluid__detail">
						<h4>Name:{product.productName}</h4>
						<p>Code: {product.productCode}</p>
						<p>
							Price: <span>$</span>
							{product.price}{" "}
						</p>
						<p>Color: {product.color}</p>
						<p>Description: {product.description}</p>
						<p>
							{" "}
							<ButtonToggle color="success">ADD TO BAG</ButtonToggle>
						</p>
					</div>
				</div>
			)}
		</div>
	);
}
