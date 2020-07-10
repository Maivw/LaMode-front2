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
							<p>Dress</p>
							<p>Lingerie</p>
							<p>Swimwear</p>
							<p>Shirts</p>
						</Col>
						<Col>
							<span className="textModal">Sale</span>
							<p>All</p>
							<p>10% - 20%</p>
							<p>20% - 50%</p>
							<p> over 50%</p>
						</Col>
					</Row>
				</ModalBody>
			</Modal>
		</div>
	);
}
