
import { spawn } from 'redux-saga/effects'

// Sagas
import statSaga from './statSaga'

// Export the root saga
export default function* rootSaga() {
    console.log("Hello From Redux-Saga!")
    yield spawn(statSaga)
}