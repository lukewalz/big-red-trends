import { combineReducers } from 'redux'

import stat from './statReducer'
import team from './teamReducer'
import year from './yearReducer'

export default combineReducers({
    stat,
    team,
    year
})