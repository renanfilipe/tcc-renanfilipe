import React from "react";
import NavBar from "../others/NavBar";
import {withStyles} from "@material-ui/core/styles";
import {withRouter} from "react-router-dom";

const styles = {};

const ApiKeysContainer = (props) => {
    return (
        <NavBar {...props}/>
    )
};

export default withRouter(withStyles(styles)(ApiKeysContainer));
