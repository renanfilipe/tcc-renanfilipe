import React, {Component} from 'react';
import Logo from './Logo';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import { Accounts } from "meteor/accounts-base";
import { withStyles } from "@material-ui/core/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class RecoverPassword extends Component{
	constructor(props){
		super(props);
		this.state = {
			email: "",
		}
	};

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const email = this.state.email.trim();

		if (!email){
			return;
		}

		Accounts.forgotPassword({ email } , (error) => {
			this.props.snackBar("We have sent a confirmation email to your registered email address. " +
				"Please follow the instructions in the email to continue.", "success");
			console.log(error);
		});
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.centerItem}>
				<div className={classes.container}>
					<Logo/>
					<ValidatorForm className={classes.formContainer} onSubmit={this.handleSubmit}>
						<span className={classes.boxTitle}>Recover Password</span>
						<TextValidator
							id="email"
							label="Email"
							type="email"
							name="email"
							fullWidth
							autoComplete="email"
							margin="none"
							variant="outlined"
							value={this.state.email}
							onChange={this.handleChange("email")}
							validators={["required", "isEmail"]}
							errorMessages={["This field is required", "Email is not valid"]}
							FormHelperTextProps={{
								className: classes.marginDense
							}}
						/>
						<div className={classes.buttonContainer}>
							<Button
								variant="contained"
								href="/"
							>
								Cancel
							</Button>
							<Button
								variant="contained"
								type="submit"
							>
								Submit
							</Button>
						</div>
					</ValidatorForm>
				</div>
			</div>
		);
	}
}

const styles = {
	centerItem: {
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
	container: {
		flexDirection: "column",
		width: 345,
	},
	formContainer: {
		display: "flex",
		flexDirection: "column",
		height: 172,
		justifyContent: "space-evenly",
		border: "solid 1px rgba(0, 0, 0, 0.23)",
		padding: "0px 20px 15px 20px",
		marginTop: 10,
		borderRadius: 4,
	},
	boxTitle: {
		fontSize: 24,
		textAlign: "center",
	},
	buttonContainer: {
		justifyContent: "space-between",
	},
	marginDense: {
		marginTop: 0,
		marginBottom: 5,
	},
};

export default withStyles(styles)(RecoverPassword);
