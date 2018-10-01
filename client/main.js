import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import Signup from "../imports/ui/others/Signup";
import NotFound from "./../imports/ui/others/NotFound";
import Login from "./../imports/ui/others/Login";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from 'history';
import "./main.html";

const browserHistory = createBrowserHistory();

const routes = (
	<Router history={browserHistory}>
		<div>
			<Switch>
				<Route
					path="/signup"
					exact
					component={Signup}
				/>
				<Route
					path="/"
					exact
					component={Login}
				/>
				<Route
					path="*"
					component={NotFound}
				/>
			</Switch>
		</div>
	</Router>
);

Meteor.startup(() => {
	ReactDOM.render(routes, document.getElementById("app"))
});
