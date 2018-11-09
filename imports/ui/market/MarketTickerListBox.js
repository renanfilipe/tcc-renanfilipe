import React from "react";
import Paper from "@material-ui/core/Paper";
import {withStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import TableHead from "@material-ui/core/TableHead";

class MarketTickerListBox extends React.Component {
	handleTabChange = (event, activeTab) => {
		this.setState({activeTab});
	};

    constructor(props) {
        super(props);
        this.state = {
            activeTab: "usdt",
        }
    }

    render() {
        const {classes} = this.props;
		const {activeTab} = this.state;

        return (
            <Paper className={classes.root} elevation={3}>
                <Tabs
                    value={activeTab}
                    onChange={this.handleTabChange}
                    indicatorColor="primary"
                    // classes={{flexContainer: classes.tabsRoot}}
                    // scrollButtons={"off"}
                    // scrollable={false}
                    fullWidth
                >
                    <Tab
                        label="BTC"
                        value="btc"

                    />
                    <Tab
                        label="ETH"
                        value="eth"
                    />
                    <Tab
                        label="BNB"
                        value="bnb"
                    />
	                <Tab
		                label="USDT"
		                value="usdt"
	                />
                </Tabs>
                <Table className={classes.table} padding="checkbox">
	                <TableHead>
		                <TableRow classes={{root: classes.tableRow}}>
			                <TableCell padding="none">Pair</TableCell>
			                <TableCell padding="none" numeric>Price</TableCell>
			                <TableCell padding="none" numeric style={{width: 60}}>Change</TableCell>
		                </TableRow>
	                </TableHead>
                    <TableBody>
                        <TableRow classes={{root: classes.tableRow}}>
                            <TableCell padding="none">ADA/USDT</TableCell>
                            <TableCell padding="none" numeric>0.07502</TableCell>
                            <TableCell padding="none" numeric>-3.98%</TableCell>
                        </TableRow>
	                    <TableRow classes={{root: classes.tableRow}}>
		                    <TableCell padding="none">BCC/USDT</TableCell>
		                    <TableCell padding="none" numeric>0.07502</TableCell>
		                    <TableCell padding="none" numeric>-3.98%</TableCell>
	                    </TableRow>
	                    <TableRow classes={{root: classes.tableRow}}>
		                    <TableCell padding="none">BNB/USDT</TableCell>
		                    <TableCell padding="none" numeric>0.07502</TableCell>
		                    <TableCell padding="none" numeric>-3.98%</TableCell>
	                    </TableRow>
	                    <TableRow classes={{root: classes.tableRow}}>
		                    <TableCell padding="none">BTC/USDT</TableCell>
		                    <TableCell padding="none" numeric>0.07502</TableCell>
		                    <TableCell padding="none" numeric>-3.98%</TableCell>
	                    </TableRow>
	                    <TableRow classes={{root: classes.tableRow}}>
		                    <TableCell padding="none">EOS/USDT</TableCell>
		                    <TableCell padding="none" numeric>0.07502</TableCell>
		                    <TableCell padding="none" numeric>-3.98%</TableCell>
	                    </TableRow>
	                    <TableRow classes={{root: classes.tableRow}}>
		                    <TableCell padding="none">ETC/USDT</TableCell>
		                    <TableCell padding="none" numeric>0.07502</TableCell>
		                    <TableCell padding="none" numeric>-3.98%</TableCell>
	                    </TableRow>
	                    <TableRow classes={{root: classes.tableRow}}>
		                    <TableCell padding="none">ETH/USDT</TableCell>
		                    <TableCell padding="none" numeric>0.07502</TableCell>
		                    <TableCell padding="none" numeric>-3.98%</TableCell>
	                    </TableRow>
	                    <TableRow classes={{root: classes.tableRow}}>
		                    <TableCell padding="none">ICX/USDT</TableCell>
		                    <TableCell padding="none" numeric>0.07502</TableCell>
		                    <TableCell padding="none" numeric>-3.98%</TableCell>
	                    </TableRow>
	                    <TableRow classes={{root: classes.tableRow}}>
		                    <TableCell padding="none">IOTA/USDT</TableCell>
		                    <TableCell padding="none" numeric>0.07502</TableCell>
		                    <TableCell padding="none" numeric>-3.98%</TableCell>
	                    </TableRow>
	                    <TableRow classes={{root: classes.tableRow}}>
		                    <TableCell padding="none">LTC/USDT</TableCell>
		                    <TableCell padding="none" numeric>0.07502</TableCell>
		                    <TableCell padding="none" numeric>-3.98%</TableCell>
	                    </TableRow>
	                    <TableRow classes={{root: classes.tableRow}}>
		                    <TableCell padding="none">NEO/USDT</TableCell>
		                    <TableCell padding="none" numeric>0.07502</TableCell>
		                    <TableCell padding="none" numeric>-3.98%</TableCell>
	                    </TableRow>
	                    <TableRow classes={{root: classes.tableRow}}>
		                    <TableCell padding="none">NULS/USDT</TableCell>
		                    <TableCell padding="none" numeric>0.07502</TableCell>
		                    <TableCell padding="none" numeric>-3.98%</TableCell>
	                    </TableRow>
	                    <TableRow classes={{root: classes.tableRow}}>
		                    <TableCell padding="none">ONT/USDT</TableCell>
		                    <TableCell padding="none" numeric>00.07502000</TableCell>
		                    <TableCell padding="none" numeric>-3.98%</TableCell>
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
        width: 260,
        height: 454,
    },
    tableRow: {
        height: 25,
    },
	tabsRoot: {
		// maxWidth: 245,
	},
	tabRoot: {
		// width: "auto",
		// minWidth: "auto",
		// minHeight: "auto",
	}
};

export default withStyles(styles)(MarketTickerListBox);
