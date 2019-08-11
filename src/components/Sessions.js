import React from 'react';
import styled from 'styled-components';
import { MONTHS_RU } from '../constants';
import { SpacesData } from '../conteiners/GettingSpaces'

const Div = styled.div`
    margin: 5px 0;
    border: 1px solid white;
    border-radius: 5px;
    color: ${ props => props.active === true ? 'white' : '#b5a551' };
    background-color: ${ props => props.active === true ? 'red' : 'none' };
    display: inline-block;
    padding: 10px 15px;
    transition: .5s;
        
    &:hover {
        color: white;
        background-color: red;
        cursor: pointer;
    }
`;

class Sessions extends React.Component {
    state = {
        months: [],
        monthActive: 0,
        days: [],
        dayActive: 0,
        times: [],
        ids: [],
        session: '',
        showModal: false
    };

    getScheduleByMovieId = () => {
        this.arraySheduler = [];

        this.props.sessions.forEach( (item) => {
            if(item.movie === this.props.movieId) {
                this.arraySheduler.push( item.date + '~' + item._id );
            }
        } );

        this.arraySheduler.sort( (a, b) => {
            return (new Date( b.split( '~' )[0] ) > new Date( a.split( '~' )[0] ) ? -1 : 1)
        } );
    };

    changeState = (month, day) => {
        let months = [];
        let days = [];
        let times = [];
        let ids = [];
        this.arraySheduler.forEach( (item) => {
            let date = new Date( item.split( '~' )[0] );

            months.push( date.getMonth() );

            if(date.getMonth() === month) {
                days.push( date.getDate() );

                if(date.getDate() === day) {
                    let HH = ('0' + date.getHours()).slice( -2 );
                    let MM = ('0' + date.getMinutes()).slice( -2 );
                    times.push( `${ HH }:${ MM }` );
                    ids.push( item.split( '~' )[1] );
                }
            }
        } );

        this.setState( {
                months: [...new Set( months )],
                days: [...new Set( days )],
                times: times,
                ids: ids
            },
        )
    };

    changeDay = (index, day) => {
        this.changeState( 3, day );
        this.setState( {
            dayActive: index
        } )
    };

    getDateInfo = (index) => {
        this.setState( {session: this.state.ids[index]} );
        this.toggleModal();
    };

    toggleModal = () => {
        this.setState( {showModal: !this.state.showModal} );
    };

    componentWillMount() {
        this.getScheduleByMovieId();
    }

    componentDidMount() {
        if(this.arraySheduler.length !== 0) {
            let month = new Date( this.arraySheduler[0].split( '~' )[0] ).getMonth();
            let day = new Date( this.arraySheduler[0].split( '~' )[0] ).getDate();
            this.changeState( month, day );
        }
    }

    render() {
        console.log(this.state.showModal);

        if(this.state.times.length === 0) {
            return (
                <div>Сеансов на данный фильм нет</div>
            )
        } else {
            return (
                <div>
                    <div>
                        { this.state.months.map( (elem, index) => {
                            return (
                                <Div
                                    key={ index }
                                    active={ this.state.monthActive === index ? true : false }>
                                    { MONTHS_RU[elem] }
                                </Div>
                            )
                        } ) }
                    </div>
                    <div>
                        { this.state.days.map( (item, index) => {
                            return (
                                <Div
                                    key={ index }
                                    active={ this.state.dayActive === index ? true : false }
                                    onClick={ () => this.changeDay( index, item ) }>
                                    { item }
                                </Div>
                            )
                        } ) }
                    </div>
                    <div>
                        { this.state.times.map( (item, index) => {
                            return (
                                <Div
                                    key={ index }
                                    onClick={ () => this.getDateInfo( index ) }>
                                    { item }
                                </Div>
                            )
                        } ) }
                        { this.state.showModal && <SpacesData
                            hideModal={ this.toggleModal }
                            session={ this.state.session }
                            movie={ this.props.movieId }/> }
                    </div>

                </div>
            )
        }

    }
}

export default Sessions