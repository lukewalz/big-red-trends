
import {
    SET_LOADING,
    GET_STAT,
    SET_METRIC
} from '../actions/statAction'

// Define your state here
const initialState = {
    offense: [],
    loading: false,
    team: 'nebraska',
    years: [],
    defense: [],
    color: '',
    metric: 'explosiveness'
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_STAT:
            return {
                ...state,
                offense: payload.map(e => e.offense),
                defense: payload.map(e => e.defense),
                loading: false,
                years: payload.map(e => e.year),
                team: payload[0].team,
                color: payload[0].color,
                secondary: payload[0].secondary,
                logo: payload[0].logo,
            }
        case SET_METRIC: {
            return {
                ...state,
                metric: payload
            }
        }
        default:
            return state
    }
}
