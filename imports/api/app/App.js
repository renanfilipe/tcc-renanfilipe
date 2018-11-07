import React from "react";
import AppStoreProvider, { AppContext } from "./AppStoreProvider";
import Routes from "../routes/Routes"

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
					<Routes {...props} {...context}/>
				);
			}}
		</AppContext.Consumer>
	);
};

export default AppBase;
