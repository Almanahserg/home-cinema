import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Cinema from "../contexts/Cinema";
import { MONTHS_RU } from '../constants';
import { useCookies } from "react-cookie";


const ModalTag = styled.div`
    position: fixed;
    background: rgba(0, 0, 0, .7);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Content = styled.div`
    position: relative;
    border-radius: 20px;
    width: 800px;
    height: 400px;
    background: white;
    border: 3px solid rgba(181, 165, 81, 0.5);
    padding: 10px;
    box-shadow: 0 0 5px ${ '#b5a551' };
    background-color: ${ '#e2e2e2' };
`;

const CloseButton = styled.div`
    position: absolute;
    top: 5px;
    right: 5px;
    width: 22px;
    height: 22px;
    border: 2px solid white;
    border-radius: 22px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 5px black;
    color: white;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .8s;
    cursor: pointer;
        
    &:hover {
        background-color: rgb(255, 0, 0);
        transform: rotate(360deg); 
    }
`;

const InformBoard = styled.div`
    height: 200px;
    width: 700px;
    margin: auto;
    display: flex;
    align-items: top;
    justify-content: center;
`;
const MovieInfo = styled.div`
    width: 300px;
`;

const MovieImg = styled.div`
    width: 400px;
    height: 200px;
    border: 3px solid rgba(181, 165, 81, 0.5);
    margin: 0 8px;
    background-image: url(${ props => props.bg });
    background-size: cover;
    background-position: 75% 25%;
`;

const CinemaHall = styled.div`
    height: ${ props => props.size === 70 ? 200 : 250 }px;
    width: ${ props => props.size === 70 ? 400 : 500 }px;
    transform: perspective(300px) rotate3d(1, 0, 0, 50deg);
    margin: ${ props => props.size === 70 ? -30 : -55 }px auto;
    background-color: white;
    box-shadow: 0 0 5px ${ '#000000' };
    padding-top: 10px;
`;

const Place = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid red;
    border-radius: 5px;
    float: left;
    text-align: center;
    cursor: pointer;
    ${ props => !props.free
    ? `background-color: red;`
    : props.booked ? `
            background-color: #001d88;
            color: white` : `
            background-color: white;` };
    ${ props => props.free && `
        &: hover {
            background-color: #001d88;
            color: white;
            border: 1px solid #001d88;
        }
    ` }
`;

const BuyButton = styled.div`
    margin: 5px 0;
    border: 2px solid white;
    border-radius: 5px;
    color: white;
    background-color: red;
    display: inline-block;
    padding: 10px 15px;
    transition: .5s;
    box-shadow: 0 0 1px black;
    
        
    &:hover {
        color: white;
        background-color: red;
        cursor: pointer;
        box-shadow: 0 0 5px black;
    }
`;

let modalRoot = document.createElement( 'div' );

export const Spaces = (props) => {
    const movie = useContext( Cinema ).movies.filter( (item) => (item._id === props.movie.movie) );
    const session = useContext( Cinema ).sessions.filter( (item) => (item._id === props.movie.session) );
    const [bookedPlaces, setBookedPlaces] = useState( [] );
    const [cookies, setCookie] = useCookies( ['user', 'tickets'] );

    useEffect( () => {
        document.querySelector( 'body' ).appendChild( modalRoot );
        return () => modalRoot.remove()
    }, [] );


    let searchingPlaceId = (item) => {
        if(item.free) {
            return () => {
                let array = [...bookedPlaces];
                let valueIndex;
                bookedPlaces.forEach( (place, index) => {
                        if(place._id === item._id) {
                            valueIndex = index;
                        }
                    }
                );

                if(valueIndex === undefined) {
                    array.push( item );
                } else {
                    array.splice( valueIndex, 1 );
                }
                setBookedPlaces( array );
                item.booked = !item.booked;
            }
        }
    };

    const dateFormat = () => {
        let date = new Date( session[0].date );
        let month = date.getMonth();
        let day = date.getDate();
        let HH = ('0' + date.getHours()).slice( -2 );
        let MM = ('0' + date.getMinutes()).slice( -2 );

        return (
            <div style={ {marginTop: '20px'} }>
                { 'Начало сеанса:' }
                <div>месяц - <b>{ MONTHS_RU[month] }</b></div>
                <div>число - <b>{ day }</b></div>
                <div>время - <b>{ HH }:{ MM }</b></div>
            </div>
        )
    };

    return (
        ReactDOM.createPortal(
            <ModalTag>
                <Content>
                    <CloseButton onClick={ props.hideModal }>{ "\u2715" }</CloseButton>
                    <InformBoard>
                        <MovieInfo>
                            <h2>{ movie[0].title }</h2>
                            <div>{ dateFormat() }</div>
                            <br/>
                            <br/>
                            <div style={ {display: 'flex', marginBottom: '5px'} }>
                                <div style={ {
                                    height: '18px',
                                    width: '18px',
                                    borderRadius: '5px',
                                    backgroundColor: 'red',
                                    border: '1px solid red'
                                } }/>
                                <span style={ {marginLeft: '5px'} }>- место занято</span>
                            </div>
                            <div style={ {display: 'flex'} }>
                                <div style={ {
                                    height: '18px',
                                    width: '18px',
                                    borderRadius: '5px',
                                    backgroundColor: 'white',
                                    border: '1px solid red'
                                } }/>
                                <span style={ {marginLeft: '5px'} }>- место свободно</span>
                            </div>
                        </MovieInfo>
                        <MovieImg bg={ movie[0].poster }/>
                        <MovieInfo style={ {textAlign: 'right'} }>
                            { bookedPlaces.length > 0
                                ? bookedPlaces.map( (elem, index) => (
                                    <div key={ index }>{ `ряд ${ elem.row }, место ${ elem.place }` }</div>
                                ) )
                                : '' }
                            { bookedPlaces.length > 0 &&
                            <BuyButton
                                onClick={ () => buyTickets( bookedPlaces, movie[0], dateFormat(), cookies.user, setCookie )
                                }>Купить</BuyButton> }
                        </MovieInfo>
                    </InformBoard>
                    <CinemaHall size={ props.spaces.count }>{
                        sortingPlaces( props.spaces.space ).map( (item, index) => (
                                <div key={ index } style={ {
                                    height: '20px',
                                    margin: '7px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                } }>
                                    { 'ряд ' + (index + 1) }
                                    { item.map( place => (
                                        <Place
                                            key={ place._id }
                                            free={ place.free }
                                            booked={ !place.booked }
                                            onClick={ searchingPlaceId( place ) }
                                        >{ place.place }</Place>
                                    ) ) }
                                    { (index + 1) + ' ряд' }
                                </div>
                            )
                        )
                    }</CinemaHall>
                </Content>
            </ModalTag>,
            modalRoot
        )
    );
};

const sortingPlaces = (items) => {
    let cinemaHall = items || [];

    cinemaHall.sort( (a, b) => (
        (a.row - b.row) === 0 ? (a.place - b.place) : (a.row - b.row)
    ) );

    let cinemaArray = [];
    cinemaHall.forEach( item => {
        if(cinemaArray[item.row - 1] === undefined) {
            cinemaArray[item.row - 1] = [];
        }
        cinemaArray[item.row - 1].push( item );
    } );

    return cinemaArray;
};

const buyTickets = (tickets, movie, session, user, setCookie) => {
    let spaces = tickets.map( elem => `ряд ${ elem.row }, место ${ elem.place }` );
    let obj = {
        movie,
        spaces
    };

    setCookie ('tickets', obj);

    if(user !== 'undefined') {
        alert( 'Покупка успешно завершена.\nВсе купленные билеты можете посмотреть в личном кабинете.');
    } else {
        alert( 'Для покупки билетов вам необходимо авторизоваться на сайте.' );
    }

};