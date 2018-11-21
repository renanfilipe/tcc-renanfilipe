import React from "react";
import Paper from "@material-ui/core/Paper";
import {withStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import {withTracker} from "meteor/react-meteor-data";
import {Orders} from "../../api/mongo/collections";

const OrdersBox = (props) => {
    const {classes, data} = props;

    return (
        <Paper className={classes.root} elevation={3}>
            <span>Open Orders</span>
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
	                    {
	                    	data ? data.map(order => {
	                    		const {
	                    			orderId,
	                    			eventTime,
				                    symbol,
				                    orderType,
				                    side,
				                    price,
				                    quantity,
				                    stopPrice,
			                    } = order;
	                    		const filled = "0%";
			                    return (
				                    <TableRow
					                    key={orderId}
					                    classes={{root: classes.tableRow}}
				                    >
					                    <TableCell padding="none">{eventTime.toLocaleDateString("en-US")}</TableCell>
					                    <TableCell padding="none">{symbol}</TableCell>
					                    <TableCell padding="none">{orderType}</TableCell>
					                    <TableCell padding="none">{side}</TableCell>
					                    <TableCell padding="none">{price}</TableCell>
					                    <TableCell padding="none">{filled}</TableCell>
					                    <TableCell padding="none">{quantity}</TableCell>
					                    <TableCell padding="none">{stopPrice}</TableCell>
					                    <TableCell padding="none">
						                    <Button
							                    variant="outlined"
							                    color="secondary"
							                    classes={{root: classes.tableCellButton}}
						                    >X</Button>
					                    </TableCell>
				                    </TableRow>
			                    )
		                    }) : <TableRow/>
	                    }
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
        height: 215,
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

const OrdersContainer = withTracker(({exchange, ticker}) => {
    const balanceBoxHandle = Meteor.subscribe("orders");
    const loading = !balanceBoxHandle.ready();
    let data = Orders.find(
    	{
		    exchange: exchange,
		    userId: Meteor.userId(),
		    symbol: ticker,
		    orderStatus: "NEW",
        },
	    {
	    	sort: {eventTime: -1}
	    },
    );

    const dataExists = !loading && !!data;
    return {
        data: dataExists ? data.fetch() : [],
    };
})(withStyles(styles)(OrdersBox));

export default OrdersContainer;
