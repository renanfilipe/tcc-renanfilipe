import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import TableHead from "@material-ui/core/TableHead";
import {Tickers} from "../../api/mongo/collections";
import {withStyles} from "@material-ui/core/styles";
import {ReactiveVar} from 'meteor/reactive-var';
import {withTracker} from "meteor/react-meteor-data";

const reactiveCoin = new ReactiveVar("USDT");

class TickerListBox extends React.Component {
	handleTabChange = (event, activeTab) => {
	    reactiveCoin.set(activeTab);
		this.setState({activeTab});
	};

    constructor(props) {
        super(props);
        this.state = {
            activeTab: "USDT",
        }
    }

    render() {
        const {classes, data} = this.props;
		const {activeTab} = this.state;
        return (
            <Paper className={classes.root} elevation={3}>
                <Tabs
                    value={activeTab}
                    onChange={this.handleTabChange}
                    indicatorColor="primary"
                    classes={{
                        flexContainer: classes.tabsRoot,
                        root: classes.tabsRoot,
                    }}
                >
                    <Tab
                        label="BTC"
                        value="BTC"
                        classes={{
                            root: classes.tabRoot,
                            labelContainer: classes.tabLabel,
                        }}
                    />
                    <Tab
                        label="ETH"
                        value="ETH"
                        classes={{
                            root: classes.tabRoot,
                            labelContainer: classes.tabLabel,
                        }}
                    />
                    <Tab
                        label="BNB"
                        value="BNB"
                        classes={{
                            root: classes.tabRoot,
                            labelContainer: classes.tabLabel,
                        }}
                    />
	                <Tab
		                label="USDT"
		                value="USDT"
                        classes={{
                            root: classes.tabRoot,
                            labelContainer: classes.tabLabel,
                        }}
	                />
                </Tabs>
                <Table className={classes.table} padding="checkbox">
	                <TableHead>
		                <TableRow classes={{root: classes.tableRow}}>
			                <TableCell padding="none" style={{width: 100}}>Pair</TableCell>
			                <TableCell padding="none" numeric style={{width: 76}}>Price</TableCell>
			                <TableCell padding="none" numeric style={{width: 60}}>Change</TableCell>
		                </TableRow>
	                </TableHead>
                    <TableBody>
                        {data.map(item => {
                            let {symbol, price, change} = item;
                            const symbolName = symbol.replace(activeTab, `/${activeTab}`);

                            if(price && price < 1)
                                price = parseFloat(price).toFixed(8);
                            else if(price && price < 10)
                                price = parseFloat(price).toFixed(4);
                            else if(price && price < 100)
                                price = parseFloat(price).toFixed(3);
                            else if (price) {
                                price = parseFloat(price).toFixed(2);
                            }

                            if(change)
                                change = parseFloat(change).toFixed(2);

                            let changeClass;
                            if(change && change >= 0){
                                changeClass = classes.positiveChange;
                            } else if (change && change < 0) {
                                changeClass = classes.negativeChange;
                            }

                            return (
                                <TableRow
                                    key={symbol}
                                    classes={{root: classes.tableRow}}
                                    onClick={() => this.props.handleTickerChange(symbol)}
                                >
                                    <TableCell padding="none">{symbolName}</TableCell>
                                    <TableCell padding="none" numeric>{price}</TableCell>
                                    <TableCell padding="none" numeric className={changeClass}>{`${change}%`}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }

}

const styles = {
    root: {
        padding: "10px 10px 10px 9px",
        flexDirection: "column",
        minWidth: 280,
        height: 454,
    },
    table: {
        overflowY: "scroll",
        display: "block",
        height: "calc(100% - 19px)",
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
		width: "50px",
		minWidth: "auto",
		minHeight: "auto",
        height: "auto",
	},
    tabLabel: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    positiveChange: {
        color: "green",
    },
    negativeChange: {
        color: "red"
    },
};

const TickerListContainer = withTracker(({exchange}) => {
    const tickerListHandle = Meteor.subscribe("tickerList", exchange);
    const loading = !tickerListHandle.ready();
    const data = Tickers.find({symbol: {"$regex": `${reactiveCoin.get()}$`}}, {sort: {symbol: 1}});
    const dataExists = !loading && !!data;
    return {
        data: dataExists ? data.fetch() : [],
    };
})(withStyles(styles)(TickerListBox));

export default TickerListContainer;
