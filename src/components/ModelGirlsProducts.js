import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Row, Col, Modal, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";

export default function ModalGirlsProduct(props) {
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
								<Link to="/productlist/top">Tops</Link>
							</p>
							<p>
								<Link to="/productlist/skirts">Skirts</Link>
							</p>
							<p>
								<Link to="/productlist/kid-dresses">Kid-Dress</Link>
							</p>
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
