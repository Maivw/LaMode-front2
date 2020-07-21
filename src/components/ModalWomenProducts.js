import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/authentication";
import {
	Row,
	Col,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "reactstrap";
import { Link } from "react-router-dom";

export default function ModalWomenProduct(props) {
	const { isOpen, toggle } = props;

	return (
		<div>
			<Modal className="modalCategory" toggle={toggle} isOpen={isOpen}>
				<ModalBody
					style={{
						backgroundColor: "#f5f5f5",
						width: 700,
					}}
				>
					<Row xs="2">
						<Col className="colModalRight">
							<span className="textModal">Styles</span>
							<p>
								<Link to="/productlist/dresses">Dress</Link>
							</p>
							<p>
								<Link to="/productlist/lingerie">Lingerie</Link>
							</p>
							<p>
								<Link to="/productlist/swimwear">Swimwear</Link>
							</p>
							<p>
								<Link to="/productlist/shirts">Shirts</Link>
							</p>
						</Col>
						<Col>
							<span className="textModal">Sale</span>
							<p>
								<Link to="/products/promotion/women/10">10%</Link>
							</p>
							<p>
								<Link to="/products/promotion/women/20">20%</Link>
							</p>
							<p>
								<Link to="/products/promotion/women/30">30%</Link>
							</p>
							<p>
								<Link to="/products/promotion/women/50">50%</Link>
							</p>
							<p>
								<Link to="/products/promotion/women/70">70%</Link>
							</p>
						</Col>
					</Row>
				</ModalBody>
			</Modal>
		</div>
	);
}
