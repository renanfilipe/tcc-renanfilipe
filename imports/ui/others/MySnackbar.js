import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import withStyles from "@material-ui/core/styles/withStyles";
import WarningIcon from "@material-ui/icons/Warning";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";

const MySnackBar = props => {
	const { open, classes, variant, message, onClose } = props;
	const Icon = variantIcon[variant];
	return (
		<Snackbar
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			open={open}
			onClose={onClose}
			ContentProps={{
				"aria-describedby": "message-id",
				classes: {
					root: `${classes[variant]}`,
				}
			}}
			message={
				<span id="message-id">
					<Icon className={classes.icon}/>
					<span>{message}</span>
				</span>
			}
		/>
	);
};

const styles = {
	info: {
		backgroundColor: "#00d3ee",
		color: "#ffffff",
	},
	success: {
		backgroundColor: "#5cb860",
		color: "#ffffff",
	},
	warning: {
		backgroundColor: "#ffa21a",
		color: "#ffffff",
	},
	danger: {
		backgroundColor: "#f55a4e",
		color: "#ffffff",
	},
	icon: {
		fontSize: 20,
		verticalAlign: "bottom",
		marginRight: 5,
	}
};

const variantIcon = {
	success: CheckCircleIcon,
	warning: WarningIcon,
	error: ErrorIcon,
	info: InfoIcon,
	danger: ErrorIcon,
};

export default withStyles(styles)(MySnackBar);
