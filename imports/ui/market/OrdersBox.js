import React from "react";
import Paper from "@material-ui/core/Paper";
import {withStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

const OrdersBox = (props) => {
    const {classes} = props;

    return (
        <Paper className={classes.root} elevation={3}>
            <span>Orders</span>
            <div className={classes.tableContainer}>
                <Table padding="checkbox">
                    <TableHead>
                        <TableRow classes={{root: classes.tableRow}}>
                            <TableCell padding="none">Date</TableCell>
                            <TableCell padding="none">Pair</TableCell>
                            <TableCell padding="none">Type</TableCell>
                            <TableCell padding="none">Side</TableCell>
                            <TableCell padding="none">Price</TableCell>
                            <TableCell padding="none">Filled</TableCell>
                            <TableCell padding="none">Amount</TableCell>
                            <TableCell padding="none">Trigger</TableCell>
                            <TableCell padding="none">Cancel</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow classes={{root: classes.tableRow}}>
                            <TableCell padding="none">11/11/18</TableCell>
                            <TableCell padding="none">BTCD/USDT</TableCell>
                            <TableCell padding="none">Stop-Loss</TableCell>
                            <TableCell padding="none">Sell</TableCell>
                            <TableCell padding="none">00.00000000</TableCell>
                            <TableCell padding="none">10.1%</TableCell>
                            <TableCell padding="none">00.00000000</TableCell>
                            <TableCell padding="none">>= 0.00000000</TableCell>
                            <TableCell padding="none">
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    classes={{root: classes.tableCellButton}}
                                >X</Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </Paper>
    );
};

const styles = {
    root: {
        padding: "10px 10px 10px 9px",
        flexDirection: "column",
        minWidth: 730,
        height: 234,
    },
    tableContainer: {
        display: "block",
        overflowY: "scroll",
        height: "100%",
    },
    tableRow: {
        height: 25,
        padding: 0,
    },
    tableCell: {
        textAlign: "left",
    },
    tableCellButton: {
        minWidth: "auto",
        minHeight: "auto",
        padding: "1px 14px",
    },
};

export default withStyles(styles)(OrdersBox);
