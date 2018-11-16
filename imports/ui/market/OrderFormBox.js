import React from "react";
import Paper from "@material-ui/core/Paper";
import {withStyles} from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import LimitTab from "./orderFormTabs/LimitTab";
import MarketTab from "./orderFormTabs/MarketTab";
import StopLimitTab from "./orderFormTabs/StopLimitTab";
import TrailingStopTab from "./orderFormTabs/TrailingStopTab";

class OrderFormBox extends React.Component {
	handleTabChange = (event, activeTab) => {
		this.setState({activeTab});
	};

	renderTabContent() {
	    let result = LimitTab;
        switch(this.state.activeTab) {
            case "limit":
                result = LimitTab;
                break;
            case "market":
                result = MarketTab;
                break;
            case "stopLimit":
                result = StopLimitTab;
                break;
            case "trailingStop":
                result = TrailingStopTab;
                break;
        }
        return result;
    }

    constructor(props) {
        super(props);
        this.state = {
            activeTab: "limit",
        }
    }

    render() {
        const {classes} = this.props;
        const ActiveTab = this.renderTabContent();
        return (
            <Paper className={classes.root} elevation={3}>
                <Tabs
                    value={this.state.activeTab}
                    onChange={this.handleTabChange}
                    indicatorColor="primary"
                    classes={{
                        flexContainer: classes.tabsRoot,
                        root: classes.tabsRoot,
                    }}
                >
                    <Tab
                        label="Limit"
                        value="limit"
                        classes={{
                            root: classes.tabRoot,
                            labelContainer: classes.tabLabel,
                        }}
                    />
                    <Tab
                        label="Market"
                        value="market"
                        classes={{
                            root: classes.tabRoot,
                            labelContainer: classes.tabLabel,
                        }}
                    />
                    <Tab
                        label="Stop-Limit"
                        value="stopLimit"
                        classes={{
                            root: classes.tabRoot,
                            labelContainer: classes.tabLabel,
                        }}
                    />
                    <Tab
                        label="Trailing Stop"
                        value="trailingStop"
                        classes={{
                            root: classes.tabRoot,
                            labelContainer: classes.tabLabel,
                        }}
                    />
                </Tabs>
                <div className={classes.buySellContainer}>
                    <div className={classes.buySellBox}>
                        <span className={classes.span}>Buy BTC</span>
                        <ActiveTab side={"buy"}/>
                    </div>
                    <div className={classes.buySellBox}>
                        <span className={classes.span}>Sell BTC</span>
                        <ActiveTab side={"sell"}/>
                    </div>
                </div>
            </Paper>
        );
    }

}

const styles = {
    root: {
        padding: "10px 10px 10px 9px",
        flexDirection: "column",
        width: 590,
    },
    table: {
        overflowY: "scroll",
        display: "block",
    },
    tableRow: {
        height: 25,
    },
    tabsRoot: {
        display: "inline-flex",
        minHeight: "auto",
        height: 27,
    },
    tabRoot: {
        minWidth: "auto",
        minHeight: "auto",
        height: "auto",
    },
    tabLabel: {
    },
    buySellContainer: {
        justifyContent: "space-around",
    },
    buySellBox: {
        flexDirection: "column",
        width: "46%",
    },
    sellBox: {
        justifyContent: "space-around",
        flexDirection: "column",
        padding: "0",
    },
	span: {
    	margin: "4px 0",
	},
};

export default withStyles(styles)(OrderFormBox);
