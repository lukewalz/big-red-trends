import {
    put,
    call,
    takeEvery,
    take,
    all,
    takeLatest
} from 'redux-saga/effects';

import { getAllStats } from '../api/statApi';

import { GET_STAT, GET_STAT_REQUESTED, SET_LOADING, SET_METRIC, SET_METRIC_REQUESTED } from '../actions/statAction'

function* setMetric(metric) {
    console.log(metric)
    yield put({ type: SET_METRIC, payload: metric.metric })
}

function* getStats(team) {
    yield put({ type: SET_LOADING })

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
    yield all([takeEvery(GET_STAT_REQUESTED, getStats)
        , takeEvery(SET_METRIC_REQUESTED, setMetric)]);
}