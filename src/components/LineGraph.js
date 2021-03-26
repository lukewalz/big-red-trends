import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { Paper, Tabs, Tab, CircularProgress, Box } from '@material-ui/core'
import {
    SET_METRIC_REQUESTED,
    SET_GRAPH_TYPE_REQUESTED,
    GET_YEAR_DETAILS_REQUESTED
} from '../redux/actions/statAction';
import React from 'react'
import { connect } from 'react-redux'
import { BarChart, ShowChart, BubbleChart } from '@material-ui/icons/';
import { capitalize } from '../common'


const LineGraph = ({ stat, setMetric, setGraphType, getYear }) => {
    const options = {
        xAxis: {
            categories: stat?.years,
        },
        series: [{
            type: stat.graphType,
            data: stat[stat.sideOfBall]?.map(e => e[stat.metric]),
            showInLegend: false,
            point: {
                events: {
                    click: function (e) {
                        getYear(e.point.category, stat.team)
                    }
                }
            }


        }],
        tooltip: {
            formatter: function () {
                return `${this.x}: ${capitalize(stat.metric)} on ${capitalize(stat.sideOfBall)} - ${this.y}`
            }
        },
        colors: [stat.color],
        title: { text: `${stat.team} (${stat.sideOfBall.toUpperCase()})` }
    }
    return (
        <Paper dir='row'>
            {stat.statLoading ?
                <Box display='flex' justifyContent='center' padding={5}>
                    <CircularProgress size={100} />
                </Box>
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
            <Box display='flex' color={stat.color} justifyContent='space-around'>
                <Tabs value={stat.graphType} onChange={(i, e) => setGraphType(e)}>
                    <Tab label={<BarChart fontSize='large' />} value='bar' />
                    <Tab label={<ShowChart fontSize='large' />} value='area' />
                    <Tab label={<BubbleChart fontSize='large' />} value='scatter' />
                </Tabs>
            </Box>
        </Paper>
    )
}


const mapStateToProps = (state) => ({
    stat: state.stat
})

const mapDispatchToProps = (dispatch) => ({
    setMetric: (metric) => dispatch({ type: SET_METRIC_REQUESTED, metric }),
    setGraphType: (graph) => dispatch({ type: SET_GRAPH_TYPE_REQUESTED, graph }),
    getYear: (year, team) => dispatch({ type: GET_YEAR_DETAILS_REQUESTED, payload: { team, year } }),
})


export default connect(mapStateToProps, mapDispatchToProps)(LineGraph)