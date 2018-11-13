import React from "react";
import NavBar from "../others/NavBar";
import {withStyles} from "@material-ui/core/styles";
import {withRouter} from "react-router-dom";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import MarketTickerInfoBox from "./MarketTickerInfoBox";
import MarketBalanceBox from "./MarketBalanceBox";
import MarketTickerListBox from "./MarketTickerListBox";
import MarketGraphBox from "./MarketGraphBox";
import MarketOrdersBox from "./MarketOrdersBox";

class MarketContainer extends React.Component {
    handleTabChange = (event, activeTab) => {
        this.setState({activeTab});
    };

    constructor(props) {
        super(props);
        this.state = {
            activeTab: "binance",
            activeTicker: "ethusdt",
        }
    }

    render() {
        const {activeTab, activeTicker} = this.state;
        const {classes} = this.props;
        return (
            <div style={{flexGrow: 1}}>
                <NavBar {...this.props}/>
                <Tabs
                    value={activeTab}
                    onChange={this.handleTabChange}
                    classes={{
                        flexContainer: classes.flexContainer,
                        indicator: classes.tabsIndicator
                    }}
                    className={classes.tabs}
                    indicatorColor="primary"
                >
                    <Tab
                        label="Binance"
                        value="binance"
                        classes={{selected: classes.tabSelected}}
                        style={{maxWidth: 160}}
                    />
                    <Tab
                        label="Bitfinex"
                        value="bitfinex"
                        classes={{selected: classes.tabSelected}}
                        style={{maxWidth: 160}}
                    />
                    <Tab
                        label="Poloniex"
                        value="poloniex"
                        classes={{selected: classes.tabSelected}}
                        style={{maxWidth: 160}}
                    />
                </Tabs>
                <div className={classes.container}>
                    <div className={classes.flexRow1}>
                        <div className={classes.flexItem1}>
                            <MarketTickerInfoBox/>
                            <MarketBalanceBox/>
                        </div>
                        <MarketTickerListBox/>
                        <MarketGraphBox exchange={activeTab} ticker={activeTicker}/>
                    </div>
                    <div className={classes.flexRow2}>
                        <MarketOrdersBox/>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    flexContainer: {
        boxShadow: "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
        flexGrow: 1,
    },
    tabs: {
        marginTop: 64,
        height: 54,
        backgroundColor: "#f5f5f5",
        position: "fixed",
        width: "100%",
    },
    tabsIndicator: {
        height: 6,
    },
    tabSelected: {
        backgroundColor: "white",
    },
    container: {
        backgroundColor: "white",
        width: "100%",
        padding: 15,
        maxWidth: 1440,
        margin: "118px auto 0",
        flexDirection: "column",
    },
    flexItem1: {
        flexDirection: "column",
        height: 454,
        justifyContent: "space-between",
    },
    flexRow1: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    flexRow2: {
        marginTop: 20,
    }
};

export default withRouter(withStyles(styles)(MarketContainer));
