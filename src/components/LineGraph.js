import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { Paper, Select, InputLabel, MenuItem, Box } from '@material-ui/core'
import {
    GET_STAT_REQUESTED,
} from '../redux/actions/statAction';
import React, { useEffect } from 'react'
import { connect } from 'react-redux'


const LineGraph = ({ getStats, stat }) => {
    useEffect(() => {
        getStats('missouri')
    }, [getStats])

    const options = {
        xAxis: {
            categories: stat?.years,
        },
        series: [{
            type: "line",
            data: stat?.offense.map(e => e.stuffRate)
        }
        ],
        colors: ['#ff1536'],
        title: { text: stat.team }
    }
    return (
        <Paper elevation={5}>
            <HighchartsReact
                highcharts={Highcharts}
                options={options} />
            <Box flexDirection='column' display='flex' justifyContent='center'>
                <InputLabel id="label">Metric</InputLabel>
                <Select value="explosiveness" labelId="label" id="select">
                    <MenuItem value="explosiveness">Explosiveness</MenuItem>
                    <MenuItem value="plays">Play Number</MenuItem>
                    <MenuItem value="stuffRate">Stuff Rate</MenuItem>
                    <MenuItem value="secondLevelYards">Big Play Yards</MenuItem>
                    <MenuItem value="successRate">Success Rate</MenuItem>
                </Select>
            </Box>

        </Paper>
    )
}


const mapStateToProps = (state) => ({
    stat: state.stat
})

const mapDispatchToProps = (dispatch) => ({
    getStats: (team) => dispatch({ type: GET_STAT_REQUESTED, team }),
})


export default connect(mapStateToProps, mapDispatchToProps)(LineGraph)