import React from 'react';
import { useCookies } from 'react-cookie';
import styled from "styled-components";
import { Link } from "react-router-dom";

const ExitButton = styled.div`
    margin: 5px 0;
    border: 1px solid white;
    border-radius: 5px;
    color: #b5a551;
    display: inline-block;
    padding: 10px 15px;
    transition: .5s;
        
    &:hover {
        color: white;
        background-color: red;
        cursor: pointer;
    }
`;
let tickets;

export const UserPage = () => {
    const [cookies, removeCookie] = useCookies( ['user', 'tickets'] );
    const {firstName, lastName, profilePhoto} = cookies.user;

    const logout = () => {
        removeCookie( 'user' );
        removeCookie( 'tickets' );
    };


    if(cookies.tickets !== 'undefined') {
        tickets = (
            <div>
                <p> Купленные билеты </p>
                <p>
                    <h3>{ cookies.tickets.movie.title }</h3>
                    { cookies.tickets.spaces.map( (elem, index) => <p key={ index }>{ elem }</p> ) }
                </p>
            </div>
        )
    }

    return (
        <div style={ {
            width: '80%',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'top'
        } }>
            <div>
                <p>
                    <img
                        src={ profilePhoto }
                        alt={ 'user' }
                        style={ {margin: '0 10px'} }
                    />
                </p>
            </div>
            <div>
                <p>{ firstName } { lastName }</p>
                { tickets }
                <Link to={ '/' }>
                    <ExitButton onClick={ logout }>Выйти</ExitButton>
                </Link>

            </div>
        </div>
    )
};