import React from 'react';
import { connect } from 'react-redux';
import {
    actionGetMovies,
    actionGetRooms,
    actionGetSessions,
    actionGetSpaces
} from '../actions/actionGetData';
import ListFilms from '../components/ListFilms';

class GetData extends React.Component {
    componentDidMount() {
        this.props.getMovies();
        this.props.getRooms();
        this.props.getSessions();
        this.props.getSpaces();
    }

    render() {
        return (
            <div>
                <ListFilms/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    error: state.cinemaData.error,
    movies: state.cinemaData.movies,
    rooms: state.cinemaData.rooms,
    sessions: state.cinemaData.sessions,
    spaces: state.cinemaData.spaces
});

let mapDispatchToProps = {
    getMovies: actionGetMovies,
    getRooms: actionGetRooms,
    getSessions: actionGetSessions,
    getSpaces: actionGetSpaces
};

export const Data = connect( mapStateToProps, mapDispatchToProps )( GetData );