import React from "react";
import Paper from "@material-ui/core/Paper";
import {withStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";

class MarketTickerListBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: "binance",
        }
    }

    render() {
        const {classes} = props;

        return (
            <Paper className={classes.root} elevation={3}>
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
                <Table className={classes.table} padding="checkbox">
                    <TableBody>
                        <TableRow classes={{root: classes.tableRow}}>
                            <TableCell padding="none">Last Price</TableCell>
                            <TableCell padding="none" numeric>8000.00</TableCell>
                        </TableRow>
                        <TableRow classes={{root: classes.tableRow}}>
                            <TableCell padding="none">24h Change</TableCell>
                            <TableCell padding="none" numeric>0.5%</TableCell>
                        </TableRow>
                        <TableRow classes={{root: classes.tableRow}}>
                            <TableCell padding="none">24h High</TableCell>
                            <TableCell padding="none" numeric>7950.00</TableCell>
                        </TableRow>
                        <TableRow classes={{root: classes.tableRow}}>
                            <TableCell padding="none">24h Low</TableCell>
                            <TableCell padding="none" numeric>7900.00</TableCell>
                        </TableRow>
                        <TableRow classes={{root: classes.tableRow}}>
                            <TableCell padding="none">24h Volume</TableCell>
                            <TableCell padding="none" numeric>12,500,000.10 USDT</TableCell>
                        </TableRow>
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
        minWidth: 220,
        height: 453,
    },
    tableRow: {
        height: 25,
    },
};

export default withStyles(styles)(MarketTickerListBox);
