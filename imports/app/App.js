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

const App = props => {
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
									render={()=> <Signup {...context} {...props}/>}
								/>
								<Route
									path="/recover-password"
									exact
									render={()=> <RecoverPassword {...context} {...props}/>}
								/>
								<Route
									path="/"
									exact
									render={()=> <Login {...context} {...props}/>}
								/>
								<Route
									path="*"
									render={()=> <NotFound {...context} {...props}/>}
								/>
							</Switch>
						</div>
					</Router>
				);
			}}
		</AppContext.Consumer>
	);
};

export default AppBase;
