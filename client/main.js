import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import Signup from "../imports/ui/others/Signup";
import RecoverPassword from "../imports/ui/others/RecoverPassword";
import NotFound from "./../imports/ui/others/NotFound";
import Login from "./../imports/ui/others/Login";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import "./main.html";

const browserHistory = createBrowserHistory();

const routes = (
	<Router history={browserHistory}>
		<div style={{width: "100%"}}>
			<Switch>
				<Route
					path="/signup"
					exact
					component={Signup}
				/>
                <Route
                    path="/recover-password"
                    exact
                    component={RecoverPassword}
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
