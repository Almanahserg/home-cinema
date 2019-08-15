import React from 'react';
import { connect } from 'react-redux';
import {
    actionGetMovies,
    actionGetSessions
} from '../actions/actionGetData';
import Cinema from '../routes/index';


class GetData extends React.Component {
    componentWillMount() {
        this.props.getMovies();
        this.props.getSessions();
    }

    render() {
        const {movies, sessions} = this.props;
        return (
            <div>
                <Cinema
                    movies={ movies }
                    sessions={ sessions }
                />
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    error: state.cinemaData.error,
    movies: state.cinemaData.movies,
    sessions: state.cinemaData.sessions
});

let mapDispatchToProps = {
    getMovies: actionGetMovies,
    getSessions: actionGetSessions
};

export const Data = connect( mapStateToProps, mapDispatchToProps )( GetData );