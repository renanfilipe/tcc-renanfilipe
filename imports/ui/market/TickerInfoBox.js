import React from "react";
import {withStyles} from "@material-ui/core/styles";
import {withTracker} from "meteor/react-meteor-data";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {Tickers} from "../../api/mongo/collections";

const TickerInfoBox = (props) => {
    const {classes, coin, pair} = props;
    let price = props.data && props.data.price ? props.data.price : undefined;
    let high = props.data && props.data.high ? props.data.high : undefined;
    let low = props.data && props.data.low ? props.data.low : undefined;
    let change = props.data && props.data.change ? parseFloat(props.data.change).toFixed(2) : undefined;
    let volume = props.data && props.data.volume ? props.data.volume : undefined;

    if(pair === "USDT") {
        if(price)
            price = parseFloat(price).toFixed(2);
        if(high)
            high = parseFloat(high).toFixed(2);
        if(low)
            low = parseFloat(low).toFixed(2);
        if(volume)
            volume = parseFloat(volume).toFixed(2);
    }

    return (
        <Paper className={classes.root} elevation={3}>
            <span>{`${coin}/${pair}`}</span>
            <Table className={classes.table} padding="checkbox">
                <TableBody>
                    <TableRow classes={{root: classes.tableRow}}>
                        <TableCell padding="none">Last Price</TableCell>
                        <TableCell padding="none" numeric>{price}</TableCell>
                    </TableRow>
                    <TableRow classes={{root: classes.tableRow}}>
                        <TableCell padding="none">24h Change</TableCell>
                        <TableCell padding="none" numeric>{`${change}%`}</TableCell>
                    </TableRow>
                    <TableRow classes={{root: classes.tableRow}}>
                        <TableCell padding="none">24h High</TableCell>
                        <TableCell padding="none" numeric>{high}</TableCell>
                    </TableRow>
                    <TableRow classes={{root: classes.tableRow}}>
                        <TableCell padding="none">24h Low</TableCell>
                        <TableCell padding="none" numeric>{low}</TableCell>
                    </TableRow>
                    <TableRow classes={{root: classes.tableRow}}>
                        <TableCell padding="none">24h Volume</TableCell>
                        <TableCell padding="none" numeric>{`${volume} ${pair}`}</TableCell>
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
        height: 168,
    },
    tableRow: {
        height: 25,
    },
};

const TickerInfoContainer = withTracker(({exchange, ticker}) => {
    const tickerInfoHandle = Meteor.subscribe("tickerInfo", exchange, ticker);
    const loading = !tickerInfoHandle.ready();
    const data = Tickers.findOne({});
    const dataExists = !loading && !!data;
    return {
        data: dataExists ? data : [],
    };
})(withStyles(styles)(TickerInfoBox));

export default TickerInfoContainer;
