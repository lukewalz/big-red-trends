import { connect } from 'react-redux'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Typography } from '@material-ui/core'

const SortableTable = ({ stat }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Year</TableCell>
                        <TableCell>Explosiveness</TableCell>
                        <TableCell>Play Count</TableCell>
                        <TableCell>Stuff Rate</TableCell>
                        <TableCell>Big Play Yards</TableCell>
                        <TableCell>Success Rate</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {stat ? stat.offense.map(s => {
                        <TableRow key={s.year}>
                            <TableCell component="th" scope="row">
                                {s.year}
                            </TableCell>
                            <TableCell align="right">{s.explosiveness}</TableCell>
                            <TableCell align="right">{s.plays}</TableCell>
                            <TableCell align="right">{s.stuffRate}</TableCell>
                            <TableCell align="right">{s.secondLevelYards}</TableCell>
                            <TableCell align="right">{s.successRate}</TableCell>
                        </TableRow>
                    }) : []}
                </TableBody>
            </Table>
        </TableContainer>

    )

}

const mapStateToProps = (state) => ({
    stat: state.stat
})


export default connect(mapStateToProps, null)(SortableTable)
