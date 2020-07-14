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
