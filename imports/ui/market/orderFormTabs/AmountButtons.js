import React from "react";
import Button from "@material-ui/core/Button/Button";
import {withStyles} from "@material-ui/core";

const AmountButtons = (props) => {
    const {classes} = props;

    return (
        <div>
            <Button
                variant="outlined"
                color="primary"
                classes={{root: classes.amountButton}}
                style={{borderLeftColor: "rgba(63, 81, 181, 0.5)"}}
            >25%</Button>
            <Button
                variant="outlined"
                color="primary"
                classes={{root: classes.amountButton}}
            >50%</Button>
            <Button
                variant="outlined"
                color="primary"
                classes={{root: classes.amountButton}}
            >75%</Button>
            <Button
                variant="outlined"
                color="primary"
                classes={{root: classes.amountButton}}
                style={{borderRightColor: "rgba(63, 81, 181, 0.5)"}}
            >100%</Button>
        </div>
    )
};

const styles = {
    amountButton: {
        minWidth: 50,
        width: "25%",
        borderRadius: 0,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        padding: "2.5px 0",
        minHeight: "initial",
        maxHeight: 25,
	    fontSize: "0.8125rem",
	    textAlign: "right",
	    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    },
};

export default withStyles(styles)(AmountButtons);