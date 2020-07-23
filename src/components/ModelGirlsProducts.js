import React from "react";
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
								<Link to="/productlist/tops">Tops</Link>
							</p>
							<p>
								<Link to="/productlist/swearshirt">Swearshirts</Link>
							</p>
							<p>
								<Link to="/productlist/kid-dresses">Kid-Dress</Link>
							</p>
						</Col>
						<Col>
							<span className="textModal">Sale</span>
							<p>
								<Link to="/products/promotion/girls/10">10%</Link>
							</p>
							<p>
								<Link to="/products/promotion/girls/20">20%</Link>
							</p>
							<p>
								<Link to="/products/promotion/girls/30">30%</Link>
							</p>
							<p>
								<Link to="/products/promotion/girls/50">50%</Link>
							</p>
							<p>
								<Link to="/products/promotion/girls/70">70%</Link>
							</p>
						</Col>
					</Row>
				</ModalBody>
			</Modal>
		</div>
	);
}
