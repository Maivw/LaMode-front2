import React from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../../reducers/authentication";
import { useDispatch, useSelector } from "react-redux";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ModalWomenProduct from "../Products/ModalWomenProducts";
import ModalMenProduct from "../Products/ModalMenProducts";
import ModalGirlsProduct from "../Products/ModelGirlsProducts";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import "./navbar.css";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));
const StyledBadge = withStyles((theme) => ({
	badge: {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: "0 4px",
	},
}))(Badge);
export default function Navbar(props) {
	const token = useSelector((state) => state.authentication.token);
	const products = useSelector((state) => state.cartManagement.products);
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
		history.push("/");
	};
	const onLogin = (e) => {
		e.preventDefault();
		history.push("/login");
	};
	const onSignup = (e) => {
		e.preventDefault();
		history.push("/signup");
	};
	return (
		<div>
			{token ? (
				<div className={classes.root} id="navbar">
					<Grid container spacing={3}>
						<Grid item xs>
							<div className="navbar--logout-btn" onClick={onLogout}>
								<ExitToAppIcon style={{ marginLeft: 20 }} />
								Logout
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-around",
								}}
							>
								<a
									href="https://github.com/Maivw/LaMode-front2"
									style={{
										textDecoration: "none",
										color: "white",
										marginTop: 15,
									}}
								>
									About
								</a>

								<a
									style={{
										textDecoration: "none",
										color: "white",
										marginTop: 15,
									}}
									href="https://maivw.github.io/"
								>
									Contact
								</a>
							</div>
						</Grid>
						<Grid item xs={8} className="navbar-p2">
							<div className="brandName">
								<span
									className="brandName_text"
									onClick={(e) => onBackHomePage(e)}
								>
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
										All Products
									</span>
								</div>
							</div>
						</Grid>
						<Grid item xs className="navbar-p3">
							<div className="navbar-icons">
								<Link to="/" style={{ display: "flex", alignItems: "center" }}>
									<AccountCircleIcon style={{ color: "white" }} />
								</Link>
								<Link
									to="/favorite"
									style={{ display: "flex", alignItems: "center" }}
								>
									<Badge color="secondary" variant="dot">
										<FavoriteIcon style={{ color: "white" }} />
									</Badge>
								</Link>
								<Link to="/cart">
									<IconButton aria-label="cart">
										<StyledBadge
											badgeContent={products.length}
											color="secondary"
										>
											<LocalMallIcon
												style={{ color: "white" }}
												className="navbar-bag-icon"
											/>
										</StyledBadge>
									</IconButton>
								</Link>
							</div>
						</Grid>
					</Grid>
				</div>
			) : (
				<div className={classes.root} id="navbar">
					<Grid container spacing={3}>
						<Grid item xs>
							<div className="navbar--login-btn" onClick={onLogin}>
								<VpnKeyIcon style={{ marginLeft: 20 }} /> Login
							</div>
							<div className="navbar--signup-btn" onClick={onSignup}>
								<PersonAddIcon style={{ marginLeft: 20 }} /> Sign up
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-around",
								}}
							>
								<a
									href="https://github.com/Maivw/LaMode-front2"
									style={{
										textDecoration: "none",
										color: "white",
										marginTop: 15,
									}}
								>
									About
								</a>

								<a
									style={{
										textDecoration: "none",
										color: "white",
										marginTop: 15,
									}}
									href="https://maivw.github.io/"
								>
									Contact
								</a>
							</div>
						</Grid>
						<Grid item xs={8} className="navbar-p2">
							<div className="brandName">
								<span
									className="brandName_text"
									onClick={(e) => onBackHomePage(e)}
								>
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
										All Products
									</span>
								</div>
							</div>
						</Grid>
						<Grid item xs className="navbar-p3">
							<div className="navbar-icons">
								<Link
									to="/favorite"
									style={{ display: "flex", alignItems: "center" }}
								>
									<Badge color="secondary" variant="dot">
										<FavoriteIcon style={{ color: "white" }} />
									</Badge>
								</Link>
								<Link to="/cart">
									<IconButton aria-label="cart" style={{ marginRight: 100 }}>
										<StyledBadge
											badgeContent={products.length}
											color="secondary"
										>
											<LocalMallIcon
												style={{ color: "white" }}
												className="navbar-bag-icon"
											/>
										</StyledBadge>
									</IconButton>
								</Link>
							</div>
						</Grid>
					</Grid>
				</div>
			)}
		</div>
	);
}
