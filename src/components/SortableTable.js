import { connect } from 'react-redux'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Typography } from '@material-ui/core'
import { capitalize } from '../common';
import { useEffect } from 'react';


const SortableTable = ({ year, stat }) => {
    return (
        <TableContainer component={Paper}>
            {year.yearDetails.length > 0 ?
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Week</TableCell>
                            <TableCell>Opponent</TableCell>
                            <TableCell>Offense {capitalize(stat.metric)}</TableCell>
                            <TableCell>Defense {capitalize(stat.metric)}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {year.yearDetails.map((y, i) =>
                            <TableRow key={i}>
                                <TableCell component="th" scope="row">
                                    {i}
                                </TableCell>
                                <TableCell>{y.opponent}</TableCell>
                                <TableCell>{y.offense[stat.metric]}</TableCell>
                                <TableCell>{y.defense[stat.metric]}</TableCell>
                            </TableRow>)}
                    </TableBody>

                </Table>
                : []}
        </TableContainer >
    )

}

const mapStateToProps = (state) => ({
    year: state.year,
    stat: state.stat
})


export default connect(mapStateToProps, null)(SortableTable)
