import {
    put,
    call,
    takeEvery, all
} from 'redux-saga/effects';

import { getYearDetails } from '../api/statApi';

import { CLEAR_YEAR, CLEAR_YEAR_REQUESTED, GET_YEAR_DETAILS, GET_YEAR_DETAILS_REQUESTED, SET_YEAR_LOADING } from '../actions/statAction'

function* getYear(action) {
    yield put({ type: SET_YEAR_LOADING })
    console.log(action.payload)
    const details = yield call(getYearDetails, { year: action.payload.year, team: action.payload.team })

    yield put({ type: GET_YEAR_DETAILS, payload: details })
}

function* clearYearDetails() {
    yield put({ type: CLEAR_YEAR })
}

export default function* teamSaga() {
    yield all([takeEvery(GET_YEAR_DETAILS_REQUESTED, getYear), takeEvery(CLEAR_YEAR_REQUESTED, clearYearDetails)])
}