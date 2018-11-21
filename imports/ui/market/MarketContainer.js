import React from "react";
import NavBar from "../others/NavBar";
import {withStyles} from "@material-ui/core/styles";
import {withRouter} from "react-router-dom";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import TickerInfoContainer from "./TickerInfoBox";
import MarketBalanceBox from "./BalanceBox";
import MarketTickerListBox from "./TickerListBox";
import MarketGraphBox from "./GraphBox";
import MarketOrdersBox from "./OrdersBox";
import MarketOrderFormBox from "./OrderFormBox";
import {exchangeData, exchangePairList} from "./../../api/config/config";

class MarketContainer extends React.Component {
    splitSymbolName = (symbol, pairList) => {
        for (let i = 0; i < pairList.length; i++) {
            if(symbol.endsWith(pairList[i])) {
                return {
                    coin: symbol.replace(pairList[i], ""),
                    pair: pairList[i],
                };
            }
        }
    };

    handleTabChange = (event, activeTab) => {
        this.setState({activeTab});
    };

    handleTickerChange = (activeTicker) => {
        this.setState({activeTicker});
    };

    constructor(props) {
        super(props);
        this.state = {
            activeTab: exchangeData[0].name,
            activeTicker: exchangeData[0].firstTicker,
        }
    }

    render() {
        const {activeTab, activeTicker} = this.state;
        const {classes} = this.props;
        const splitSymbolName = this.splitSymbolName(activeTicker, exchangePairList[activeTab]);
        const coin = splitSymbolName["coin"];
        const pair = splitSymbolName["pair"];

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
	                {
	                	exchangeData.map(exchange => (
			                <Tab
                                key={exchange.name}
				                label={exchange.name}
				                value={exchange.name}
				                classes={{
					                selected: classes.tabSelected,
					                root: classes.tabRoot
				                }}
			                />
		                ))
	                }
                    
                </Tabs>
                <div className={classes.container}>
                    <div className={classes.flexRow1}>
                        <div className={classes.flexItem1}>
                            <TickerInfoContainer
                                exchange={activeTab}
                                ticker={activeTicker}
                                coin={coin}
                                pair={pair}
                            />
                            <MarketBalanceBox
                                exchange={activeTab}
                                coin={coin}
                                pair={pair}
                            />
                        </div>
                        <MarketTickerListBox
                            exchange={activeTab}
                            pairList={exchangePairList[activeTab]}
                            handleTickerChange={this.handleTickerChange}
                        />
                        <MarketGraphBox
                            exchange={activeTab}
                            ticker={activeTicker}
                        />
                    </div>
                    <div className={classes.flexRow2}>
                        <MarketOrdersBox
	                        exchange={activeTab}
	                        ticker={activeTicker}
                        />
                        <MarketOrderFormBox
                            coin={coin}
                            pair={pair}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    flexContainer: {
	    height: 30,
        boxShadow: "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
        flexGrow: 1,
    },
    tabs: {
        marginTop: 64,
	    minHeight: "auto",
        backgroundColor: "#f5f5f5",
        position: "fixed",
        width: "100%",
    },
    tabsIndicator: {
        height: 4,
    },
	tabRoot: {
		maxWidth: 160,
		minHeight: 30,
	},
    tabSelected: {
        backgroundColor: "white",
    },
    container: {
        backgroundColor: "white",
        width: "100%",
        padding: 15,
        maxWidth: 1370,
        margin: "94px auto 0",
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
        justifyContent: "space-between",
    }
};

export default withRouter(withStyles(styles)(MarketContainer));
