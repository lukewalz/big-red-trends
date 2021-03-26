
import {
    SET_LOADING,
    GET_STAT,
} from '../actions/statAction'

// Define your state here
const initialState = {
    offense: [],
    loading: false,
    team: '',
    years: [],
    defense: [],
    color: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_STAT:
            console.log(payload)
            return {
                ...state,
                offense: payload.map(e => e.offense),
                defense: payload.map(e => e.defense),
                loading: false,
                years: payload.map(e => e.year),
                team: payload[0].team,
                color: payload[0].color,
                logo: payload[0].logo
            }
        default:
            return state
    }
}
