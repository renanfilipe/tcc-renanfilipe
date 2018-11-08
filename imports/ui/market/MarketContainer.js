import React from "react";
import NavBar from "../others/NavBar";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import MarketTickerInfoBox from "./MarketTickerInfoBox";
import MarketBalanceBox from "./MarketBalanceBox";

const styles = {
    flexContainer: {
        boxShadow: "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
		flexGrow: 1,
	},
	tabs : {
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
        marginTop: 118,
		width: "100%",
        padding: 15,
		flexDirection: "column",
	},
	separator: {
		maxHeight: 10,
		flexGrow: 1,
	}
};

class MarketContainer extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
            activeTab: "binance",
		}
	}

    handleTabChange = (event, activeTab) => {
        this.setState({ activeTab });
    };

	render () {
		const { activeTab } = this.state;
		const { classes } = this.props;
		return (
            <div style={{flexGrow: 1}}>
                <NavBar {...this.props}/>
				<Tabs
					value={ activeTab }
					onChange={ this.handleTabChange }
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
					<MarketTickerInfoBox/>
					<div className={classes.separator}/>
					<MarketBalanceBox/>
				</div>
            </div>
		)
	}
}

export default withRouter(withStyles(styles)(MarketContainer));
