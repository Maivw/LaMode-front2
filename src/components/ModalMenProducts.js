import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	typography: {
		padding: theme.spacing(2),
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
		<div>
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
				<Typography className={classes.typography}>
					<div className="colModalRight">
						<span className="textModal">Styles</span>
						<p>
							<Link to="/productlist/graphictee">Graphictee</Link>
						</p>
						<p>
							<Link to="/productlist/bottoms">Bottom</Link>
						</p>
						<p>
							<Link to="/productlist/jeans & demin">Jeans - Demin</Link>
						</p>
						<p>
							<Link to="/productlist/hoodies">Hoodies</Link>
						</p>
					</div>
					<div>
						<span className="textModal">Sale</span>
						<p>
							<Link to="/products/promotion/men/10">10%</Link>
						</p>
						<p>
							<Link to="/products/promotion/men/20">20%</Link>
						</p>
						<p>
							<Link to="/products/promotion/men/30">30%</Link>
						</p>
						<p>
							<Link to="/products/promotion/men/50">50%</Link>
						</p>
						<p>
							<Link to="/products/promotion/men/70">70%</Link>
						</p>
					</div>
				</Typography>
			</Popover>
		</div>
	);
}
