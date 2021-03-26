import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { Paper, Tabs, Tab, CircularProgress } from '@material-ui/core'
import {
    SET_METRIC, SET_METRIC_REQUESTED
} from '../redux/actions/statAction';
import React from 'react'
import { connect } from 'react-redux'


const LineGraph = ({ stat, setMetric }) => {

    const options = {
        xAxis: {
            categories: stat?.years,
        },
        series: [{
            type: "line",
            data: stat?.offense.map(e => e[stat.metric])
        }
        ],
        colors: ['#ff1536'],
        title: { text: stat.team }
    }
    return (
        <Paper>
            {stat.loading ? <CircularProgress />
                :
                <div>
                    <Tabs value={stat.metric} onChange={(i, e) => setMetric(e)}>
                        <Tab label='Explosiveness' value='explosiveness' />
                        <Tab label='Play Count' value='plays' />
                        <Tab label='Stuff Rate' value='stuffRate' />
                        <Tab label='Second Level Yards' value='secondLevelYards' />
                        <Tab label='Success Rate' value='successRate' />
                    </Tabs>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options} />
                </div>
            }

        </Paper>
    )
}


const mapStateToProps = (state) => ({
    stat: state.stat
})

const mapDispatchToProps = (dispatch) => ({
    setMetric: (metric) => dispatch({ type: SET_METRIC_REQUESTED, metric }),
})


export default connect(mapStateToProps, mapDispatchToProps)(LineGraph)