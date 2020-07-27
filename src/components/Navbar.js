import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { logout } from "../reducers/authentication";
import { useDispatch, useSelector } from "react-redux";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import SearchIcon from "@material-ui/icons/Search";
import ModalWomenProduct from "./ModalWomenProducts";
import ModalMenProduct from "./ModalMenProducts";
import ModalGirlsProduct from "./ModelGirlsProducts";
import { Link, Redirect } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";

export default function Navbar(props) {
	const [modalWomen, setModalWomen] = useState(false);
	const [modalMen, setModalMen] = useState(false);
	const [modalGirls, setModalGirls] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	let history = useHistory();
	const dispatch = useDispatch();

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

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			setSearchTerm(e.target.value);
			history.push(`/search?item=${e.target.value}`);
		}
		console.log("nnnnn");
	};
	const onLogout = (e) => {
		e.preventDefault();
		dispatch(logout());
		history.push("/login");
	};

	return (
		<>
			<ModalWomenProduct isOpen={modalWomen} toggle={handOKModalWomen} />
			<ModalMenProduct isOpen={modalMen} toggle={handOKModalMen} />
			<ModalGirlsProduct isOpen={modalGirls} toggle={handOKModalGirls} />
			<Row className="navbar">
				<Col className="navbar_col" xs="3" lg="3">
					<span>
						<SettingsIcon style={{ marginLeft: 20 }} onClick={onLogout} />
					</span>
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
						<input
							className="input_search"
							placeholder="Search by color"
							onKeyDown={handleKeyDown}
							onChange={() => handleKeyDown}
						/>
						<SearchIcon className="input_search__icon" />
					</div>
					<div>
						<AccountCircleIcon />
					</div>
					<div>
						<Link to="/favorite">
							<FavoriteIcon />
						</Link>
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
