import React from 'react';
import { connect } from 'react-redux';
import {
    actionGetMovies,
    actionGetRooms,
    actionGetSessions
} from '../actions/actionGetData';
import Header from "../components/Header";
import ListFilms from '../components/ListFilms';

class GetData extends React.Component {
    componentDidMount() {
        this.props.getMovies();
        this.props.getRooms();
        this.props.getSessions();
    }

    render() {
        return (
            <div>
                <Header/>
                <ListFilms/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    error: state.cinemaData.error,
    movies: state.cinemaData.movies,
    rooms: state.cinemaData.rooms,
    sessions: state.cinemaData.sessions
});

let mapDispatchToProps = {
    getMovies: actionGetMovies,
    getRooms: actionGetRooms,
    getSessions: actionGetSessions
};

export const Data = connect( mapStateToProps, mapDispatchToProps )( GetData );