import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class MyDialog extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			open: false,
		};
	}

	render() {
		const {title, message, buttons, open, onClose} = this.props;
		return (
			<div>
				<Dialog
					open={this.state.open}
					onClose={onClose}
				>
					<DialogTitle>{title}</DialogTitle>
					<DialogContent>
						<DialogContentText>{message}</DialogContentText>
					</DialogContent>
					{
						buttons ? (
							<DialogActions>
								{
									buttons.map(button => (
										<Button
											onClick={onClose}
											color={button.color || "primary"}
										>
											{button.name}
										</Button>
									))
								}
							</DialogActions>
						): ""
					}
				</Dialog>
			</div>
		);
	}
}

export default MyDialog;
