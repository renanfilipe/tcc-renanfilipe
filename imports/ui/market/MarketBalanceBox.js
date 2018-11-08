import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
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
					Balance
				</Typography>
				<Table padding="checkbox">
					<TableHead>
						<TableRow>
							<TableCell>BTC</TableCell>
							<TableCell numeric>Amount</TableCell>
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
				<Table padding="checkbox">
					<TableHead>
						<TableRow>
							<TableCell>USDT</TableCell>
							<TableCell numeric>Amount</TableCell>
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
		</div>
	);
};

export default withStyles(styles)(MarketTickerInfoBox);
