import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

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

const MarketTickerInfoBox = (props) => {
    const { classes } = props;

    return (
        <div>
            <Paper className={classes.root} elevation={3}>
                <Typography variant="p">
                    BTC/USDT
                </Typography>
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
        </div>
    );
};

export default withStyles(styles)(MarketTickerInfoBox);
