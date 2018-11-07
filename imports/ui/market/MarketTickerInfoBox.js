import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = {
    root: {
        // height: 200,
        // width: 200,
        padding: 10,
        // backgroundColor: "#f5f5f5"
    },
    table: {
        minWidth: 700,
    },
};

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const MarketTickerInfoBox = (props) => {
    const { classes } = props;

    return (
        <div>
            <Paper className={classes.root} elevation={5}>
                <Typography variant="h4">
                    BTC/USDT
                </Typography>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell numeric>Calories</TableCell>
                            <TableCell numeric>Fat (g)</TableCell>
                            <TableCell numeric>Carbs (g)</TableCell>
                            <TableCell numeric>Protein (g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => {
                            return (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell numeric>{row.calories}</TableCell>
                                    <TableCell numeric>{row.fat}</TableCell>
                                    <TableCell numeric>{row.carbs}</TableCell>
                                    <TableCell numeric>{row.protein}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
};

export default withStyles(styles)(MarketTickerInfoBox);
