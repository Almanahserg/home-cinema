import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const List = styled.ul`
    margin: 0;
    
    li{
        display: inline;
    }
`;

const StyledLink = styled.div`
    margin: 0;
    color: #b5a551;
    display: inline-block;
    padding: 14px 15px;
    transition: .5s;
        
    &:hover {
        color: white;
        background-color: red;
        cursor: pointer;
    }
`;

export const Menu = () => {
    return (
        <List>
            <li>
                <Link to='/movies'>
                    <StyledLink>Фильмы</StyledLink>
                </Link>
            </li>
            <li>
                <Link to='/counter'>
                    <StyledLink>Расписание</StyledLink>
                </Link>
            </li>
            <li>
                <Link to='/counter'>
                    <StyledLink>Контакты</StyledLink>
                </Link>
            </li>
        </List>
    )
};