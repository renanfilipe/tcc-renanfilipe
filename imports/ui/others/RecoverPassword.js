import React, {Component} from 'react';
import Logo from './Logo';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";

class Signup extends Component{
    render() {
        return (
            <div style={styles.centerItem}>
                <div style={styles.container}>
                    <Logo/>
                    <form style={styles.formContainer}>
                        <span style={styles.boxTitle}>Recover Password</span>
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
