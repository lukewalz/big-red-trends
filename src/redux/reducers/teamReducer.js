
import {
    GET_TEAMS,
    SET_LOADING
} from '../actions/statAction'

// Define your state here
const initialState = {
    loading: false,
    teams: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_TEAMS:
            return {
                ...state,
                loading: false,
                teams: payload
            }
        default:
            return state
    }
}