import React from "react";
import Paper from "@material-ui/core/Paper";
import {withStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {withTracker} from "meteor/react-meteor-data";
import {Balances} from "../../api/mongo/collections";

const BalanceBox = (props) => {
    const {classes, data, coin, pair} = props;
    const availableCoin = data && data.coin && data.coin.availableBalance ? parseFloat(data.coin.availableBalance) : 0;
	const onOrderCoin = data && data.coin && data.coin.onOrderBalance ? parseFloat(data.coin.onOrderBalance) : 0;
	const totalCoin = parseFloat(availableCoin + onOrderCoin);
	let availablePair = data && data.pair && data.pair.availableBalance ? parseFloat(data.pair.availableBalance) : 0;
	let onOrderPair = data && data.pair && data.pair.onOrderBalance ? parseFloat(data.pair.onOrderBalance) : 0;
    let totalPair = parseFloat(availablePair + onOrderPair);

	if(pair === "USDT")
		availablePair = availablePair.toFixed(2);
		onOrderPair = onOrderPair.toFixed(2);
		totalPair = totalPair.toFixed(2);

    return (
        <Paper className={classes.root} elevation={3}>
            <span>Balance</span>
            <Table padding="checkbox">
                <TableHead>
                    <TableRow classes={{root: classes.tableRow}}>
                        <TableCell padding="none">{coin}</TableCell>
                        <TableCell padding="none" numeric>Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow classes={{root: classes.tableRow}}>
                        <TableCell padding="none">Available</TableCell>
                        <TableCell padding="none" numeric>{availableCoin}</TableCell>
                    </TableRow>
                    <TableRow classes={{root: classes.tableRow}}>
                        <TableCell padding="none">On Orders</TableCell>
                        <TableCell padding="none" numeric>{onOrderCoin}</TableCell>
                    </TableRow>
                    <TableRow classes={{root: classes.tableRow}}>
                        <TableCell padding="none">Total</TableCell>
                        <TableCell padding="none" numeric>{totalCoin}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Table padding="checkbox" style={{marginTop: 20}}>
                <TableHead>
                    <TableRow classes={{root: classes.tableRow}}>
                        <TableCell padding="none">{pair}</TableCell>
                        <TableCell padding="none" numeric>Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow classes={{root: classes.tableRow}}>
                        <TableCell padding="none">Available</TableCell>
                        <TableCell padding="none" numeric>{availablePair}</TableCell>
                    </TableRow>
                    <TableRow classes={{root: classes.tableRow}}>
                        <TableCell padding="none">On Orders</TableCell>
                        <TableCell padding="none" numeric>{onOrderPair}</TableCell>
                    </TableRow>
                    <TableRow classes={{root: classes.tableRow}}>
                        <TableCell padding="none">Total</TableCell>
                        <TableCell padding="none" numeric>{totalPair}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    );
};

const styles = {
    root: {
        padding: "10px 10px 10px 9px",
        flexDirection: "column",
        minWidth: 220,
        height: 266,
    },
    tableRow: {
        height: 25,
        padding: 0,
    },
};

const BalanceContainer = withTracker(({exchange, coin, pair}) => {
    const balanceBoxHandle = Meteor.subscribe("balance");
    const loading = !balanceBoxHandle.ready();
    let data = Balances.findOne(
        {
	        exchange: exchange,
	        userId: Meteor.userId(),
        },
        {fields: {balances: 1}}
    );

    if(data && data.balances){
        data.coin = data.balances.find(balance => coin === balance.asset);
        data.pair = data.balances.find(balance => pair === balance.asset);
        delete data.balances;
    }

    const dataExists = !loading && !!data;
    return {
        data: dataExists ? data : [],
    };
})(withStyles(styles)(BalanceBox));

export default BalanceContainer;
