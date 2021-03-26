import { combineReducers } from 'redux'

import stat from './statReducer'
import team from './teamReducer'

export default combineReducers({
    stat,
    team
})