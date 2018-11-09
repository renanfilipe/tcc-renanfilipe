import React, {Component} from "react";
import Logo from "./Logo";
import Button from "@material-ui/core/Button";
import {Meteor} from "meteor/meteor";
import {withStyles} from "@material-ui/core/styles";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {withRouter} from "react-router-dom";

class Login extends Component {
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        const email = this.state.email.trim();
        const password = this.state.password.trim();

        Meteor.loginWithPassword({email}, password, (err) => {
            if (err) {
                this.props.snackBar("Unable to login. Check email and password.", "danger");
            } else {
	            this.props.snackBar("Logged successfully.", "success");
	            this.props.history.push("/market");
            }
        });
    };

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.centerItem}>
                <div className={classes.container}>
                    <Logo/>
                    <ValidatorForm
                        className={classes.formContainer}
                        onSubmit={this.handleSubmit}
                    >
                        <span className={classes.boxTitle}>Log In</span>
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
                        <TextValidator
                            id="password"
                            label="Password"
                            type="password"
                            name="password"
                            fullWidth
                            margin="none"
                            variant="outlined"
                            value={this.state.password}
                            onChange={this.handleChange("password")}
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                            FormHelperTextProps={{
                                className: classes.marginDense
                            }}
                        />
                        <Button
                            variant="contained"
                            fullWidth
                            type="submit"
                        >
                            Log In
                        </Button>
                        <div className={classes.buttonContainer}>
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
    marginDense: {
        marginTop: 0,
        marginBottom: 5,
    },
};

export default withRouter(withStyles(styles)(Login));
