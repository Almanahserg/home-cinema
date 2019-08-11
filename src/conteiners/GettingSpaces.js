import React from 'react';
import { connect } from 'react-redux';
import { actionGetSpaces } from '../actions/actionGetData';
import { Spaces } from '../components/Spaces';

class GetSpaces extends React.Component {
    componentDidMount() {
        this.props.getSpaces( this.props.session );
    }

    render() {
        const {spaces, movie, session} = this.props;

        return (
            <div>
                <Spaces
                    hideModal={ this.props.hideModal }
                    spaces={ spaces }
                    movie={ {movie: movie, session: session} }/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    spaces: state.cinemaData.spaces
});

let mapDispatchToProps = {
    getSpaces: actionGetSpaces
};

export const SpacesData = connect( mapStateToProps, mapDispatchToProps )( GetSpaces );