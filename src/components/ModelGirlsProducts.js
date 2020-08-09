import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	typography: {
		padding: theme.spacing(2),
		backgroundColor: "#e0e0e0",
		width: 300,
		alignItems: "center",
	},
}));
export default function ModalGirlsProduct(props) {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	return (
		<div>
			<div
				aria-describedby={id}
				variant="contained"
				color="primary"
				onClick={handleClick}
			>
				Girls
			</div>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "center",
				}}
			>
				<div className="navbar--modal">
					<Typography className={classes.typography}>
						<div className="colModalRight">
							<span className="textModal">
								<strong>Styles</strong>
							</span>
							<p>
								<Link to="/productlist/tops">
									<span className="textModal">Tops</span>
								</Link>
							</p>
							<p>
								<Link to="/productlist/swearshirt">
									<span className="textModal">Swearshirts</span>
								</Link>
							</p>
							<p>
								<Link to="/productlist/kid-dresses">
									<span className="textModal">Kid-Dress</span>
								</Link>
							</p>
						</div>
					</Typography>
					<Typography className={classes.typography}>
						<div>
							<span className="textModal">
								<strong>Sales</strong>
							</span>
							<p>
								<Link to="/products/promotion/girls/10">
									<span className="textModal">10%</span>
								</Link>
							</p>
							<p>
								<Link to="/products/promotion/girls/20">
									<span className="textModal">20%</span>
								</Link>
							</p>
							<p>
								<Link to="/products/promotion/girls/30">
									<span className="textModal">30%</span>
								</Link>
							</p>
							<p>
								<Link to="/products/promotion/girls/50">
									<span className="textModal">50%</span>
								</Link>
							</p>
							<p>
								<Link to="/products/promotion/girls/70">
									<span className="textModal">70%</span>
								</Link>
							</p>
						</div>
					</Typography>
				</div>
			</Popover>
		</div>
	);
}
