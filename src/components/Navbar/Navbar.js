import React, { useState } from "react";
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
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import "./navbar.css";
import Options from "./Options";

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

	const [anchorEl, setAnchorEl] = useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<div className={classes.root} id="navbar">
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="center"
					spacing={3}
				>
					<Grid
						item
						direction="row"
						justify="center"
						alignItems="center"
						xs
						sm
						md
						lg
						xl
					>
						<div className="navbar__logo">
							<a href="https://maivw.github.io/">
								<img
									className="navbar__logo--image"
									src="https://res.cloudinary.com/maivw/image/upload/v1600572380/Lamode/LamModeLogo_mifxuv.png"
									alt="LaModeLogo"
								/>
							</a>
						</div>
					</Grid>
					<Grid
						item
						xs={8}
						className="navbar-p2"
						direction="row"
						justify="center"
						alignItems="center"
					>
						<div className="brandName">
							<span
								className="brandName__text"
								onClick={(e) => onBackHomePage(e)}
							>
								LaMode
							</span>
						</div>
						<div className="navbar__categories">
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
									id="navbar__allproducts"
									onClick={(e) => onShowProducts(e)}
								>
									All Products
								</span>
							</div>
						</div>
					</Grid>
					<Grid
						item
						xs
						sm
						md
						lg
						xl
						className="navbar-p3"
						direction="row"
						justify="center"
						alignItems="center"
					>
						<div className="navbar__icons">
							<Link to="/favorite">
								<Badge color="secondary" variant="dot">
									<FavoriteIcon className="navbar__icons--favorite " />
								</Badge>
							</Link>
							<Link to="/cart">
								<StyledBadge badgeContent={products.length} color="secondary">
									<LocalMallIcon className="navbar__icons--bag" />
								</StyledBadge>
							</Link>
							<AccountCircleIcon onClick={handleClick} />
							<Options anchorEl={anchorEl} handleClose={handleClose} />
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}
