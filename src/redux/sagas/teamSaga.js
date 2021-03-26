import {
    put,
    call,
    takeEvery
} from 'redux-saga/effects';

import { getAllTeams } from '../api/statApi';

import { GET_TEAMS, GET_TEAMS_REQUESTED, SET_TEAM_LOADING } from '../actions/statAction'

function* getTeams() {
    yield put({ type: SET_TEAM_LOADING })

    const teams = yield call(getAllTeams)

    yield put({ type: GET_TEAMS, payload: teams })
}

export default function* teamSaga() {
    yield takeEvery(GET_TEAMS_REQUESTED, getTeams)
}