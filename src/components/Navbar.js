import React from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../reducers/authentication";
import { useDispatch } from "react-redux";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocalMallIcon from "@material-ui/icons/LocalMall";
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
	let history = useHistory();

	const onBackHomePage = (e) => {
		e.preventDefault();
		history.push("/");
	};
	const onShowProducts = (e) => {
		e.preventDefault();
		history.push("/products");
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
						<span className="brandName_text" onClick={(e) => onBackHomePage(e)}>
							LaMode
						</span>
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
							<span
								id="navbar__all-products"
								onClick={(e) => onShowProducts(e)}
							>
								All
							</span>
						</div>
					</div>
				</Grid>
				<Grid item xs className="navbar-p3">
					<div className="navbar-icons">
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
