import React from "react";
import Button from "@material-ui/core/Button/Button";
import TextField from "@material-ui/core/TextField/TextField";
import AmountButtons from "./AmountButtons";
import {withStyles} from "@material-ui/core";

class LimitTab extends React.Component {
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    constructor(props) {
        super(props);
        this.state = {
            price: undefined,
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
                    <span className={classes.label}>Price</span>
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
        padding: "9px 0",
        marginRight: 10,
    },
    input: {
        width: 179,
        padding: "9px",
        textAlign: "right",
    },
};

export default withStyles(styles)(LimitTab);
