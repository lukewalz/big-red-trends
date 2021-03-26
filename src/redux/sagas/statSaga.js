import {
    put,
    call,
    takeEvery,
    all,
} from 'redux-saga/effects';

import { getAllStats } from '../api/statApi';

import { GET_STAT, GET_STAT_REQUESTED, SET_STAT_LOADING, SET_METRIC, SET_METRIC_REQUESTED, SET_SIDE_OF_BALL, SET_SIDE_OF_BALL_REQUESTED, SET_TEAM, SET_GRAPH_TYPE, SET_GRAPH_TYPE_REQUESTED } from '../actions/statAction'

function* setGraphType(graph) {
    yield put({ type: SET_GRAPH_TYPE, payload: graph.graph })
}

function* setMetric(metric) {
    yield put({ type: SET_METRIC, payload: metric.metric })
}

function* setSideOfBall(sob) {
    yield put({ type: SET_SIDE_OF_BALL, payload: sob.sob })
}

function* getStats(team) {
    yield put({ type: SET_STAT_LOADING })
    yield put({ type: SET_TEAM, payload: team.team });

    const stats = yield call(getAllStats, team.team)

    var statsDto = stats.map(stat => {
        return {
            year: stat.season,
            team: stat.team,
            color: stat.color,
            secondary: stat.secondary,
            logo: stat.logo,
            defense: {
                explosiveness: stat.defense?.explosiveness,
                plays: stat.defense?.plays,
                stuffRate: stat.defense?.stuffRate,
                secondLevelYards: stat.defense?.secondLevelYardsTotal,
                successRate: stat.defense?.successRate
            },
            offense: {
                explosiveness: stat.offense?.explosiveness,
                plays: stat.offense?.plays,
                stuffRate: stat.offense?.stuffRate,
                secondLevelYards: stat.offense?.secondLevelYardsTotal,
                successRate: stat.offense?.successRate
            }
        }
    });

    yield put({ type: GET_STAT, payload: statsDto })
}

export default function* statSaga() {
    yield all([takeEvery(GET_STAT_REQUESTED, getStats),
    takeEvery(SET_METRIC_REQUESTED, setMetric),
    takeEvery(SET_SIDE_OF_BALL_REQUESTED, setSideOfBall),
    takeEvery(SET_GRAPH_TYPE_REQUESTED, setGraphType)])
}