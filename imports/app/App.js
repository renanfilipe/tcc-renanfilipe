import React from "react";
import Signup from "../ui/account/Signup";
import RecoverPassword from "../ui/account/RecoverPassword";
import NotFound from "./../ui/others/NotFound";
import Login from "../ui/account/Login";
import MarketContainer from "../ui/market/marketContainer";
import { Router, Route, Switch, Redirect } from "react-router";
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

const unauthenticatedPages = ["/", "/signup", "/recover-password"];
const authenticatedPages = ["/market"];

const onEnterPublicPage = (Component, context, props) => {
	if (Meteor.userId()) {
		console.log("redirecionado public");
		return <Redirect to="/market" />
	} else {
		return <Component {...context} {...props} />
	}
};

const onEnterPrivatePage = (Component, context, props) => {
	if (!Meteor.userId()) {
		console.log("redirecionado private");
		return <Redirect to="/" />
	} else {
		return <Component {...context} {...props} />
	}
};

// export const onAuthChange = (isAuthenticated) => {
// 	const pathName = history.location.pathname;
// 	const isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
// 	const isAuthenticatedPage = authenticatedPages.includes(pathName);
//
// 	if (isUnauthenticatedPage && isAuthenticated) {
// 		history.replace('/links');
// 	} else if (isAuthenticatedPage && !isAuthenticated) {
// 		history.replace('/');
// 	}
// };

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
									render={()=> onEnterPublicPage(Signup, context, props)}
								/>
								<Route
									path="/recover-password"
									exact
									render={()=> onEnterPublicPage(RecoverPassword, context, props)}
								/>
								<Route
									path="/market"
									exact
									render={()=> onEnterPrivatePage(MarketContainer, context, props)}
								/>
                                <Route
                                    path="/market/:view"
                                    exact
                                    render={()=> onEnterPrivatePage(MarketContainer, context, props)}
                                />
								<Route
									path="/"
									exact
									render={()=> onEnterPublicPage(Login, context, props)}
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
