import React from "react";
import Button from "@material-ui/core/Button/Button";
import TextField from "@material-ui/core/TextField/TextField";
import AmountButtons from "./AmountButtons";
import {withStyles} from "@material-ui/core";

class StopLimitTab extends React.Component {
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    constructor(props) {
        super(props);
        this.state = {
            stop: undefined,
            limit: undefined,
            amount: undefined,
            total: undefined,
            side: this.props.side || "buy",
        }
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.container}>
                <div className={classes.row}>
                    <span className={classes.label}>Stop</span>
                    <TextField
                        placeholder="USDT"
                        value={this.state.stop}
                        onChange={this.handleChange('distance')}
                        variant="outlined"
                        margin="none"
                        InputLabelProps={{shrink: true}}
                        inputProps={{className: classes.input}}
                    />
                </div>
                <div className={classes.row}>
                    <span className={classes.label}>Limit</span>
                    <TextField
                        placeholder="USDT"
                        value={this.state.distance}
                        onChange={this.handleChange('distance')}
                        variant="outlined"
                        margin="none"
                        InputLabelProps={{shrink: true}}
                        inputProps={{className: classes.input}}
                    />
                </div>
                <div className={classes.row}>
                    <span className={classes.label}>Amount</span>
                    <TextField
                        placeholder="BTC"
                        value={this.state.amount}
                        onChange={this.handleChange('amount')}
                        variant="outlined"
                        margin="none"
                        InputLabelProps={{shrink: true}}
                        inputProps={{className: classes.input}}
                    />
                </div>
                <AmountButtons/>
                <div className={classes.row} style={{marginTop: 8}}>
                    <span className={classes.label}>Total</span>
                    <TextField
                        placeholder="USDT"
                        value={this.state.total}
                        onChange={this.handleChange('total')}
                        variant="outlined"
                        margin="none"
                        InputLabelProps={{shrink: true}}
                        inputProps={{className: classes.input}}
                    />
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                >{this.state.side}</Button>
            </div>
        )
    }
}

const styles = {
    container: {
        flexDirection: "column",
        padding: "0",
    },
    row: {
        justifyContent: "space-between",
        marginBottom: 8,
    },
    label: {
	    padding: "5px 0",
	    marginRight: 10,
	    fontSize: "0.8125rem",
	    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
	    fontWeight: 500,
    },
    input: {
	    width: 187,
	    padding: "5px 10px",
	    fontSize: "0.8125rem",
	    textAlign: "right",
	    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    },
};

export default withStyles(styles)(StopLimitTab);
