import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import SearchIcon from "@material-ui/icons/Search";
import ModalWomenProduct from "./ModalWomenProducts";
import ModalMenProduct from "./ModalMenProducts";
import ModalGirlsProduct from "./ModelGirlsProducts";
import { Link } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";

export default function Navbar(props) {
	const [modalWomen, setModalWomen] = useState(false);
	const [modalMen, setModalMen] = useState(false);
	const [modalGirls, setModalGirls] = useState(false);

	const onshowModalWomen = () => {
		setModalWomen(true);
	};
	const onshowModalMen = () => {
		setModalMen(true);
	};
	const onshowModalGirls = () => {
		setModalGirls(true);
	};
	const handOKModalWomen = () => {
		setModalWomen(false);
	};
	const handOKModalMen = () => {
		setModalMen(false);
	};
	const handOKModalGirls = () => {
		setModalGirls(false);
	};
	// const isOpen = () => setModalWomen(!modalWomen);

	return (
		<>
			<ModalWomenProduct isOpen={modalWomen} toggle={handOKModalWomen} />
			<ModalMenProduct isOpen={modalMen} toggle={handOKModalMen} />
			<ModalGirlsProduct isOpen={modalGirls} toggle={handOKModalGirls} />
			<Row className="navbar">
				<Col className="navbar_col" xs="3" lg="3">
					<Link to="/logout">
						<SettingsIcon style={{ marginLeft: 20 }} />
					</Link>
				</Col>
				<Col className="navbar_col" xs="auto" lg="auto">
					<Row className="brandName">
						{" "}
						<span className="brandName_text">LaMode</span>
					</Row>
					<Row xs="1" sm="2" md="4">
						<Col className="navbar_col--category" onClick={onshowModalWomen}>
							Women
						</Col>
						<Col className="navbar_col--category" onClick={onshowModalMen}>
							Men
						</Col>
						<Col className="navbar_col--category" onClick={onshowModalGirls}>
							Girls
						</Col>
						<Col>
							<Link to="/products">
								<span>All</span>
							</Link>
						</Col>
					</Row>
				</Col>

				<Col
					xs="3"
					lg="3"
					className="d-flex flex-row justify-content-between align-items-center"
				>
					<div>
						<input className="input_search" />
						<SearchIcon className="input_search__icon" />
					</div>
					<div>
						<AccountCircleIcon />
					</div>
					<div>
						<FavoriteIcon />
					</div>
					<div>
						<Link to="/cart/:id?">
							<LocalMallIcon />
						</Link>
					</div>
				</Col>
			</Row>
		</>
	);
}
