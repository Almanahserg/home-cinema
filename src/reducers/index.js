import { combineReducers } from 'redux'
import { getDataReducer } from "./getDataReducer";

export const rootReducer = combineReducers( {
    cinemaData: getDataReducer,
} );