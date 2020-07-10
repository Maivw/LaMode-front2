import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
				<Col className="navbar_col" xs="3">
					<Link to="/logout">
						<SettingsIcon />
					</Link>
				</Col>
				<Col className="navbar_col" xs="auto">
					<Row className="brandName">LaMode</Row>
					<Row xs="1" sm="2" md="4">
						<Col onClick={onshowModalWomen}>Women</Col>
						<Col onClick={onshowModalMen}>Men</Col>
						<Col onClick={onshowModalGirls}>Girls</Col>
						<Col>
							<Link to="/products">
								<span className="link_show_allProduct">All</span>
							</Link>
						</Col>
					</Row>
				</Col>
				<Col className="navbar_col" xs="3">
					<Row xs="1" sm="2" md="4">
						<Col>
							<AccountCircleIcon />
						</Col>
						<Col>
							<FavoriteIcon />
						</Col>
						<Col>
							<LocalMallIcon />
						</Col>
						<Col>
							<input className="input_search" />
							<SearchIcon className="input_search__icon" />
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	);
}
