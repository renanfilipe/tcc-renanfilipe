import React from "react";
import Paper from "@material-ui/core/Paper";
import {withStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const MarketTickerInfoBox = (props) => {
    const {classes} = props;

    return (
        <Paper className={classes.root} elevation={3}>
            <span>Balance</span>
            <Table padding="checkbox">
                <TableHead>
                    <TableRow classes={{root: classes.tableRow}}>
                        <TableCell padding="none">BTC</TableCell>
                        <TableCell padding="none" numeric>Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow classes={{root: classes.tableRow}}>
                        <TableCell padding="none">Available</TableCell>
                        <TableCell padding="none" numeric>0.00000001</TableCell>
                    </TableRow>
                    <TableRow classes={{root: classes.tableRow}}>
                        <TableCell padding="none">In Orders</TableCell>
                        <TableCell padding="none" numeric>0.00000002</TableCell>
                    </TableRow>
                    <TableRow classes={{root: classes.tableRow}}>
                        <TableCell padding="none">Total</TableCell>
                        <TableCell padding="none" numeric>0.00000003</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Table padding="checkbox" style={{marginTop: 20}}>
                <TableHead>
                    <TableRow classes={{root: classes.tableRow}}>
                        <TableCell padding="none">USDT</TableCell>
                        <TableCell padding="none" numeric>Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow classes={{root: classes.tableRow}}>
                        <TableCell padding="none">Available</TableCell>
                        <TableCell padding="none" numeric>10.00</TableCell>
                    </TableRow>
                    <TableRow classes={{root: classes.tableRow}}>
                        <TableCell padding="none">In Orders</TableCell>
                        <TableCell padding="none" numeric>50.00</TableCell>
                    </TableRow>
                    <TableRow classes={{root: classes.tableRow}}>
                        <TableCell padding="none">Total</TableCell>
                        <TableCell padding="none" numeric>60.00</TableCell>
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

export default withStyles(styles)(MarketTickerInfoBox);
