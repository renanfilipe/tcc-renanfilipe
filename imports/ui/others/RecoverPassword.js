import React, {Component} from 'react';
import Logo from './Logo';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import { Accounts } from "meteor/accounts-base";

class Signup extends Component{
	constructor(props){
		super(props);
		this.state = {
			email: "",
			emailError: false,
		}
	};

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();

		const options = {};
		options.email = this.state.email.trim();

		if (!options.email){
			return;
		}

		Accounts.forgotPassword(options , (err) => {
			console.log(err);
			if (err) {
				if (err.error === 403) {
					this.props.snackBar("Usuário não encontrado.", "danger");
				} else if (err.error === 400) {
					this.setState({emailError: true})
				}
			}
		});
	};

	render() {
		return (
			<div style={styles.centerItem}>
				<div style={styles.container}>
					<Logo/>
					<form style={styles.formContainer} onSubmit={this.onSubmit}>
						<span style={styles.boxTitle}>Recover Password</span>
						<TextField
							id="email"
							label="Email"
							type="email"
							name="email"
							fullWidth
							error={this.state.emailError}
							autoComplete="email"
							margin="none"
							variant="outlined"
							value={this.state.email}
							onChange={this.handleChange("email")}
						/>
						<div style={styles.buttonContainer}>
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
					</form>
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
};

export default Signup;
