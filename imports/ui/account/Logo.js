import React from "react";
import {withStyles} from "@material-ui/core/styles";

const logo = "/images/logo.png";

const Logo = ({classes}) => (
    <div className={classes.container}>
        <img
            src={logo}
            className={classes.image}
        />
        <span className={classes.p}>
            META<br/>EXCHANGE
        </span>
    </div>
);

const styles = {
    container: {
        justifyContent: "center",
        flexDirection: "row",
        minHeight: 78,
    },
    image: {
        width: 35,
        height: 78,
    },
    p: {
        fontSize: 32,
        marginLeft: 8,
        alignSelf: "flex-end",
    }
};

export default withStyles(styles)(Logo);