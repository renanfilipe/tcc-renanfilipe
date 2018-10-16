import React from "react";
import Signup from "../ui/others/Signup";
import RecoverPassword from "../ui/others/RecoverPassword";
import NotFound from "./../ui/others/NotFound";
import Login from "./../ui/others/Login";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import AppStoreProvider, { AppContext } from "./AppStoreProvider";

const browserHistory = createBrowserHistory();

const AppBase = props => {
	return (
		<AppStoreProvider>
			<App {...props} />
		</AppStoreProvider>
	);
};

class App extends React.Component {
	render(){
		return(
			<AppContext.Consumer>
				{context => {
					return (
						<Router history={browserHistory}>
							<div style={{width: "100%"}}>
								<Switch>
									<Route
										path="/signup"
										exact
										component={Signup}
										{...context}
									/>
									<Route
										path="/recover-password"
										exact
										component={RecoverPassword}
										{...context}
									/>
									<Route
										path="/"
										exact
										component={Login}
										{...context}
									/>
									<Route
										path="*"
										component={NotFound}
										{...context}
									/>
								</Switch>
							</div>
						</Router>
					);
				}}
			</AppContext.Consumer>
		);
	}
}

export default AppBase;