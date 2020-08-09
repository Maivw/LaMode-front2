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
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));
export default function Navbar(props) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [searchTerm, setSearchTerm] = useState("");
	let history = useHistory();

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
		<div className={classes.root} id="navbar">
			<Grid container spacing={3}>
				<Grid item xs>
					<div className="navbar--logout-btn">
						<SettingsIcon style={{ marginLeft: 20 }} onClick={onLogout} />
					</div>
				</Grid>
				<Grid item xs={8} className="navbar-p2">
					<div className="brandName">
						<span className="brandName_text">LaMode</span>
					</div>
					<div className="navbar--categories">
						<div>
							<ModalWomenProduct />
						</div>
						<div>
							<ModalMenProduct />
						</div>
						<div>
							<ModalGirlsProduct />
						</div>
						<div>
							<Link to="/products">
								<span id="navbar__all-products">All</span>
							</Link>
						</div>
					</div>
				</Grid>
				<Grid item xs className="navbar-p3">
					<div className="navbar-icons">
						{/* <input
						className="input_search"
						placeholder="Search by color"
						onKeyDown={handleKeyDown}
						onChange={() => handleKeyDown}
					/>
					<SearchIcon className="input_search__icon" /> */}
						<AccountCircleIcon style={{ color: "white" }} />
						<Link to="/favorite">
							<FavoriteIcon style={{ color: "white" }} />
						</Link>
						<Link to="/cart">
							<LocalMallIcon
								style={{ color: "white" }}
								className="navbar-bag-icon"
							/>
						</Link>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}
