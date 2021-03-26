
import { spawn, all } from 'redux-saga/effects'

// Sagas
import statSaga from './statSaga'
import teamSaga from './teamSaga'

// Export the root saga
export default function* rootSaga() {
    console.log("Hello From Redux-Saga!")
    yield spawn(statSaga)
    yield spawn(teamSaga)
}