import {
    MOVIES_REJECT,
    MOVIES_RESOLVE,
    ROOMS_REJECT,
    ROOMS_RESOLVE,
    SESSIONS_REJECT,
    SESSIONS_RESOLVE
} from '../constants'

const IitialValues = {
    movies: [],
    rooms: [],
    sessions: [],
    error: false
};

export const getDataReducer = (state = IitialValues, action) => {
    switch (action.type) {
        case MOVIES_RESOLVE:
            return {
                ...state,
                movies: action.payload,
                error: false
            };
        case ROOMS_RESOLVE:
            return {
                ...state,
                rooms: action.payload,
                error: false
            };
        case SESSIONS_RESOLVE:
            return {
                ...state,
                sessions: action.payload,
                error: false
            };
        case MOVIES_REJECT:
        case ROOMS_REJECT:
        case SESSIONS_REJECT:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};