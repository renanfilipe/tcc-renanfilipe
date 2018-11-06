import React from 'react';
import AppBar from "../others/NavBar";
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";


const styles = {

};

const marketContainer = (props) => {
	return (
		<AppBar {...props}/>
	)
};

export default withRouter(withStyles(styles)(marketContainer));
