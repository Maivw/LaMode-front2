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

export default function ModalMenProduct(props) {
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
		<div className="navbar--modal">
			<div
				aria-describedby={id}
				variant="contained"
				color="primary"
				onClick={handleClick}
			>
				Men
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
							<span className="textModal">Styles</span>
							<p>
								<Link to="/productlist/graphictee">
									<span className="textModal">Graphictee</span>
								</Link>
							</p>
							<p>
								<Link to="/productlist/bottoms">
									<span className="textModal">Bottom</span>
								</Link>
							</p>
							<p>
								<Link to="/productlist/jeans & demin">
									<span className="textModal">Jeans - Demin</span>
								</Link>
							</p>
							<p>
								<Link to="/productlist/hoodies">
									<span className="textModal">Hoodies</span>
								</Link>
							</p>
						</div>
					</Typography>
					<Typography className={classes.typography}>
						<span className="textModal">Sales</span>
						<p>
							<Link to="/products/promotion/men/10">
								<span className="textModal">10%</span>
							</Link>
						</p>
						<p>
							<Link to="/products/promotion/men/20">
								<span className="textModal">20%</span>
							</Link>
						</p>
						<p>
							<Link to="/products/promotion/men/30">
								<span className="textModal">30%</span>
							</Link>
						</p>
						<p>
							<Link to="/products/promotion/men/50">
								<span className="textModal">50%</span>
							</Link>
						</p>
						<p>
							<Link to="/products/promotion/men/70">
								<span className="textModal">70%</span>
							</Link>
						</p>
					</Typography>
				</div>
			</Popover>
		</div>
	);
}
