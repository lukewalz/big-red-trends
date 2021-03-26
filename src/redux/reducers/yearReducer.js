
import {
    CLEAR_YEAR,
    GET_YEAR_DETAILS,
    SET_YEAR_LOADING
} from '../actions/statAction'

// Define your state here
const initialState = {
    yearLoading: false,
    yearDetails: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_YEAR_LOADING:
            return {
                ...state,
                yearLoading: true
            }
        case GET_YEAR_DETAILS:
            return {
                ...state,
                yearLoading: false,
                yearDetails: payload,
            }
        case CLEAR_YEAR:
            return {
                ...state,
                yearLoading: false,
                yearDetails: [],
            }
        default:
            return state
    }
}