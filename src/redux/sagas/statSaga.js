import {
    put,
    call,
    takeEvery
} from 'redux-saga/effects';

import { getAllStats } from '../api/statApi';

import { GET_STAT, GET_STAT_REQUESTED, SET_LOADING } from '../actions/statAction'

function* getStats(team) {
    yield put({ type: SET_LOADING })

    const stats = yield call(getAllStats, team.team)

    console.log(stats)
    var statsDto = stats.map(stat => {
        return {
            year: stat.season,
            team: stat.team,
            color: stat.color,
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
    yield takeEvery(GET_STAT_REQUESTED, getStats)
}