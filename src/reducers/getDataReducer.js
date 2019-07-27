import {
    MOVIES_REJECT,
    MOVIES_RESOLVE,
    ROOMS_REJECT,
    ROOMS_RESOLVE,
    SESSIONS_REJECT,
    SESSIONS_RESOLVE,
    SPACES_REJECT,
    SPACES_RESOLVE
} from '../constants'

const InitialValues = {
    movies: [],
    rooms: [],
    sessions: [],
    spaces: [],
    error: false
};

export const getDataReducer = (state = InitialValues, action) => {
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
        case SPACES_RESOLVE:
            return {
                ...state,
                spaces: action.payload,
                error: false
            };
        case MOVIES_REJECT:
        case ROOMS_REJECT:
        case SESSIONS_REJECT:
        case SPACES_REJECT:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};