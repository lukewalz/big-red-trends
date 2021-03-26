
import {
    SET_STAT_LOADING,
    GET_STAT,
    SET_METRIC,
    SET_SIDE_OF_BALL,
    SET_TEAM,
    SET_GRAPH_TYPE
} from '../actions/statAction'

// Define your state here
const initialState = {
    offense: [],
    statLoading: false,
    team: 'Nebraska',
    years: [],
    defense: [],
    color: '',
    metric: 'explosiveness',
    sideOfBall: 'offense',
    graphType: 'area'
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_STAT_LOADING:
            return {
                ...state,
                statLoading: true
            }
        case GET_STAT:
            return {
                ...state,
                offense: payload.map(e => e.offense),
                defense: payload.map(e => e.defense),
                statLoading: false,
                years: payload.map(e => e.year),
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
        case SET_SIDE_OF_BALL: {
            return {
                ...state,
                sideOfBall: payload
            }
        }
        case SET_TEAM: {
            return {
                ...state,
                team: payload,
                yearDetails: []
            }
        }
        case SET_GRAPH_TYPE: {
            return {
                ...state,
                graphType: payload
            }
        }
        default:
            return state
    }
}
