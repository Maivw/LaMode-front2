import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../reducers/productManagement";
import { addToCart } from "../reducers/cartManagement";
import ReactImageMagnify from "react-image-magnify";
import "../index.css";
import { Link } from "react-router-dom";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
// import { ButtonToggle, Modal } from "reactstrap";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function SingleProduct(props) {
	const [count, setCount] = useState(1);
	const product = useSelector(
		(state) => state.productManagement.currentProduct
	);
	const products = useSelector((state) => state.cartManagement.products);
	const { id } = props.match.params;
	const [modal, setModal] = useState(false);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getOneProduct(id, product));
	}, []);
	const toggle = () => setModal(!modal);
	const showModal = () => {
		setModal(true);
	};
	const handleAddToCart = () => {
		dispatch(addToCart(product, count));
	};

	const handleAddQuantity = () => {
		console.log("addd");
		setCount((count) => count + 1);
	};
	const handleSubQuantity = () => {
		console.log("sub");
		if (count === 1) {
			return;
		}
		setCount((count) => count - 1);
	};

	return (
		<div>
			{/* {product && (
				<div>
					<div isOpen={modal} toggle={toggle}>
						<img src={product.photo} alt="image" style={{ width: 600 }} />
					</div>
				</div>
			)} */}
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
						<p>Quantity:</p>
						<p>
							<span>
								<AddIcon onClick={handleAddQuantity} />
							</span>
							<span>{count}</span>
							<span>
								<RemoveIcon onClick={handleSubQuantity} />
							</span>
						</p>
						<p>
							<button onClick={handleAddToCart}>ADD TO BAG</button>
						</p>
					</div>
				</div>
			)}
		</div>
	);
}
