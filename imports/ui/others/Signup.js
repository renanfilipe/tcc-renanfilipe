import React, {Component} from "react";
import Logo from "./Logo";
import Button from "@material-ui/core/Button/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { withStyles } from '@material-ui/core/styles';

class Signup extends Component{
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			repeatPassword: "",
			checkBox: false,
		};
	}

	componentWillMount() {
		ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
			return value === this.state.password;
		});
		ValidatorForm.addValidationRule("passwordLength", () => {
			return this.state.password.length >= 6;
		});
	}

	handleChange = name => event => {
		this.setState({[name]: event.target.value});
	};

	handleCheckBox = () => {
		this.setState({checkBox: !this.state.checkBox});
	};

	handleSubmit = () => {
		console.log("submit");
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.centerItem}>
				<div className={classes.container}>
					<Logo/>
					<ValidatorForm className={classes.formContainer} onSubmit={this.handleSubmit}>
						<span className={classes.boxTitle}>Register</span>
						<TextValidator
							id="email"
							label="Email"
							type="email"
							name="email"
							fullWidth
							autoComplete="email"
							margin="none"
							variant="outlined"
							onChange={this.handleChange("email")}
							validators={["required", "isEmail"]}
							errorMessages={["This field is required", "Email is not valid"]}
							value={this.state.email}
							FormHelperTextProps={{
								className: classes.marginDense
							}}
						/>
						<TextValidator
							id="password"
							label="Password"
							type="password"
							name="password"
							fullWidth
							margin="none"
							variant="outlined"
							onChange={this.handleChange("password")}
							validators={["required", "passwordLength"]}
							errorMessages={["This field is required", "Password must be at least 6 characters long"]}
							value={this.state.password}
							FormHelperTextProps={{
								className: classes.marginDense
							}}
						/>
						<TextValidator
							id="repeat-password"
							label="Repeat password"
							type="password"
							name="repeatPassword"
							fullWidth
							margin="none"
							variant="outlined"
							onChange={this.handleChange("repeatPassword")}
							validators={["required", "isPasswordMatch"]}
							errorMessages={["This field is required", "Password mismatch"]}
							value={this.state.repeatPassword}
							FormHelperTextProps={{
								className: classes.marginDense
							}}
						/>
						<FormGroup row>
							<FormControlLabel
								control={
									<Checkbox
										checked={this.state.checkBox}
										onChange={this.handleCheckBox}
										value="checkBox"
										validators={["isPositive"]}
										errorMessages={["You must agree with our terms"]}
									/>
								}
								label="I agree to Meta Exchange's Term of Use"
							/>
						</FormGroup>
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
		height: 350,
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

export default withStyles(styles)(Signup);
