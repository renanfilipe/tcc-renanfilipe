import React, {Component} from 'react';
import Logo from './Logo';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class Signup extends Component{
	state = {
		checkBox: false,
		error: "",
		email: "",
	};

	handleChange = name => event => {
		this.setState({[name]: event.target.checked});
	};

	render() {
		return (
			<div style={styles.centerItem}>
				<div style={styles.container}>
					<Logo/>
					<form style={styles.formContainer} onSubmit={this.onSubmit}>
						<span style={styles.boxTitle}>Register</span>
						<TextField
							id="email"
							label="Email"
							type="email"
							name="email"
							fullWidth
							required
							autoComplete="email"
							margin="none"
							variant="outlined"
						/>
						<TextField
							id="password"
							label="Password"
							fullWidth
							required
							type="password"
							autoComplete="current-password"
							margin="none"
							variant="outlined"
						/>
						<TextField
							id="confirm-password"
							label="Confirm Password"
							fullWidth
							required
							type="password"
							margin="none"
							variant="outlined"
						/>
						<FormGroup row>
							<FormControlLabel
								control={
									<Checkbox
										checked={this.state.checkBox}
										onChange={this.handleChange('checkBox')}
										value="checkBox"
									/>
								}
								label="I agree to Meta Exchange's Term of Use"
							/>
						</FormGroup>
						<div style={styles.buttonContainer}>
							<Button
								variant="contained"
								href="/"
							>
								Cancel
							</Button>
							<Button
								variant="contained"
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
};

export default Signup;
