import {Redirect, Route, Router, Switch} from "react-router";
import React from "react";
import Signup from "../../ui/account/Signup";
import RecoverPassword from "../../ui/account/RecoverPassword";
import MarketContainer from "../../ui/market/MarketContainer";
import BalanceContainer from "../../ui/balance/BalanceContainer";
import OrdersContainer from "../../ui/orders/OrdersContainer";
import ApiKeysContainer from "../../ui/apiKeys/ApiKeysContainer";
import Login from "../../ui/account/Login";
import NotFound from "../../ui/others/NotFound";
import {createBrowserHistory} from "history";

const browserHistory = createBrowserHistory();

class Routes extends React.Component {
    onEnterPublicPage = (Component) => {
        if (Meteor.userId()) {
            return <Redirect to="/market"/>
        } else {
            return <Component {...this.props} />
        }
    };

    onEnterPrivatePage = (Component) => {
        if (!Meteor.userId()) {
            return <Redirect to="/"/>
        } else {
            return <Component {...this.props} />
        }
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={browserHistory}>
                <div style={{width: "100%"}}>
                    <Switch>
                        <Route
                            path="/signup"
                            exact
                            render={() => this.onEnterPublicPage(Signup)}
                        />
                        <Route
                            path="/recover-password"
                            exact
                            render={() => this.onEnterPublicPage(RecoverPassword)}
                        />
                        <Route
                            path="/market"
                            exact
                            render={() => this.onEnterPrivatePage(MarketContainer)}
                        />
                        <Route
                            path="/balance"
                            exact
                            render={() => this.onEnterPrivatePage(BalanceContainer)}
                        />
                        <Route
                            path="/orders"
                            exact
                            render={() => this.onEnterPrivatePage(OrdersContainer)}
                        />
                        <Route
                            path="/apikeys"
                            exact
                            render={() => this.onEnterPrivatePage(ApiKeysContainer)}
                        />
                        <Route
                            path="/"
                            exact
                            render={() => this.onEnterPublicPage(Login)}
                        />
                        <Route
                            path="*"
                            render={() => <NotFound {...props}/>}
                        />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Routes;