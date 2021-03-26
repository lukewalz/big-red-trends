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
                    {stat.defense.map((s, i) =>
                        <TableRow key={i}>
                            <TableCell component="th" scope="row">
                                {stat.years[i]}
                            </TableCell>
                            <TableCell>{s.explosiveness}</TableCell>
                            <TableCell >{s.plays}</TableCell>
                            <TableCell>{s.stuffRate}</TableCell>
                            <TableCell>{s.secondLevelYards}</TableCell>
                            <TableCell>{s.successRate}</TableCell>
                        </TableRow>
                    )}
                </TableBody>

            </Table>
        </TableContainer>

    )

}

const mapStateToProps = (state) => ({
    stat: state.stat
})


export default connect(mapStateToProps, null)(SortableTable)
