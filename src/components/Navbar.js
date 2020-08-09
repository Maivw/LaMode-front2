import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../reducers/authentication";
import { useDispatch } from "react-redux";
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
	const [searchTerm, setSearchTerm] = useState("");
	let history = useHistory();
	const dispatch = useDispatch();

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
			<div className="navbar">
				<div>
					<span>
						<SettingsIcon style={{ marginLeft: 20 }} onClick={onLogout} />
					</span>
				</div>
				<div>
					<div className="brandName">
						<span className="brandName_text">LaMode</span>
					</div>
					<div>
						<div className="navbar_col--category">
							<ModalWomenProduct />
						</div>
						<div className="navbar_col--category">
							<ModalMenProduct />
						</div>
						<div className="navbar_col--category">
							<ModalGirlsProduct />
						</div>
						<div>
							<Link to="/products">
								<span>All</span>
							</Link>
						</div>
					</div>
				</div>

				<div
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
				</div>
			</div>
		</>
	);
}
