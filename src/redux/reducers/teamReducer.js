
import {
    GET_TEAMS,
    SET_TEAM_LOADING
} from '../actions/statAction'

// Define your state here
const initialState = {
    teamLoading: false,
    teams: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_TEAM_LOADING:
            return {
                ...state,
                teamLoading: true
            }
        case GET_TEAMS:
            return {
                ...state,
                teamLoading: false,
                teams: payload
            }
        default:
            return state
    }
}