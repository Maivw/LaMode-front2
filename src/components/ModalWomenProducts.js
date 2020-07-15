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
							<p>10% </p>
							<p>20% </p>
							<p>30% </p>
							<p>50% </p>
							<p>70%</p>
						</Col>
					</Row>
				</ModalBody>
			</Modal>
		</div>
	);
}
