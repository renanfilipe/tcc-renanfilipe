import React, { Component } from 'react';
import Logo from './Logo';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Meteor } from "meteor/meteor";

class Login extends Component{
	state = {
		email: "",
		password: "",
		error: "",
	};

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    onSubmit = event => {
        event.preventDefault();

        const email = this.state.email.trim();
        const password = this.state.password.trim();

        Meteor.loginWithPassword({email}, password, (err) => {
            if (err) {
            	console.log('Unable to login. Check email and password.');
                this.setState({error: 'Unable to login. Check email and password.'});
            } else {
                this.setState({error: ''});
            }
        });
    };

	render() {
		return (
			<div style={styles.centerItem}>
				<div style={styles.container}>
					<Logo/>
					<form style={styles.formContainer}>
                        <span style={styles.boxTitle}>Log In</span>
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
                            value={this.state.email}
                            onChange={this.handleChange("email")}
						/>
						<TextField
							id="password"
							label="Password"
							fullWidth
							required
							type="password"
							autoComplete="password"
							margin="none"
							variant="outlined"
                            value={this.state.password}
                            onChange={this.handleChange("password")}
						/>
						<Button
							variant="contained"
							fullWidth
							onClick={this.onSubmit}
						>
							Log In
						</Button>
						<div style={styles.buttonContainer}>
							<Button
								variant="contained"
								href="/recover-password"
							>
								Forgot Password?
							</Button>
							<Button
								variant="contained"
								href="/signup"
							>
								Register
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
        height: 280,
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

export default Login;
