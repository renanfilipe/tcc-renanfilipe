import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

class MySnackbar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			open: true,
			message: this.props.message || "",
		};
	}

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { open, message } = this.state;
		return (
			<div>
				<Snackbar
					anchorOrigin={{ vertical: "top", horizontal: "right" }}
					open={open}
					onClose={this.handleClose}
					ContentProps={{
						'aria-describedby': 'message-id',
					}}
					message={<span id="message-id">{message}</span>}
					style={{backgroundColor: "green"}}
				/>
			</div>
		);
	}
}

export default MySnackbar;
