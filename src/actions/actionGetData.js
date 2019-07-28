import {
    URL_MOVIES,
    URL_ROOMS,
    URL_SESSIONS,
    MOVIES_REJECT,
    MOVIES_RESOLVE,
    ROOMS_REJECT,
    ROOMS_RESOLVE,
    SESSIONS_REJECT,
    SESSIONS_RESOLVE,
    SPACES_REJECT,
    SPACES_RESOLVE,
    LOADING, URL_SPACES
} from '../constants';
import axios from 'axios';

const movies = [MOVIES_RESOLVE, MOVIES_REJECT];
const rooms = [ROOMS_RESOLVE, ROOMS_REJECT];
const sessions = [SESSIONS_RESOLVE, SESSIONS_REJECT];
const spaces = [SPACES_RESOLVE, SPACES_REJECT];

export const actionPanding = () => ({type: LOADING});
export const actionResolve = (payload, array) => ({type: array[0], payload});
export const actionReject = (array) => ({type: array[1]});

export const actionGetMovies = () => {
    return dispatch => {
        dispatch( actionPanding() );

        axios.get( URL_MOVIES )
            .then( ({data}) => {
                dispatch( actionResolve( data.movie, movies ) )
            } )
            .catch( (error) => {
                dispatch( actionReject( movies ) );
                console.error( error )
            } )
    }
};

export const actionGetRooms = () => {
    return dispatch => {
        dispatch( actionPanding() );

        axios.get( URL_ROOMS )
            .then( ({data}) => {
                dispatch( actionResolve( data.rooms, rooms ) )
            } )
            .catch( (error) => {
                dispatch( actionReject(rooms) );
                console.error( error )
            } )
    }
};

export const actionGetSessions = () => {
    return dispatch => {
        dispatch( actionPanding() );

        axios.get( URL_SESSIONS )
            .then( ({data}) => {
                dispatch( actionResolve( data.session, sessions ) )
            } )
            .catch( (error) => {
                dispatch( actionReject(sessions) );
                console.error( error )
            } )
    }
};

export const actionGetSpaces = () => {
    return dispatch => {
        dispatch( actionPanding() );

        axios.get( URL_SPACES )
            .then( ({data}) => {
                console.log(data);
                dispatch( actionResolve( data.space, spaces ) )
            } )
            .catch( (error) => {
                dispatch( actionReject(spaces) );
                console.error( error )
            } )
    }
};