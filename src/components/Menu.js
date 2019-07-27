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
    color: ${ props => props.active === true ? 'white' : '#b5a551' };
    background-color: ${ props => props.active === true ? 'red' : 'none' };
    display: inline-block;
    padding: 14px 15px;
    transition: .5s;

    &:hover {
        color: white;
        background-color: red;
        cursor: pointer;
    }
`;

export class Menu extends React.Component  {
    state = {
        active: 0
    };

    changeActiveMenu = (e) => (
        () => {
            this.setState({
                active: e
            });
        }
    );

    render() {
        return (
            <List>
                <li>
                    <Link to='/movies'>
                        <StyledLink
                            onClick={this.changeActiveMenu(1)}
                            active={this.state.active === 1 ? true : false}>Фильмы</StyledLink>
                    </Link>
                </li>
                <li>
                    <Link to='/sessions'>
                        <StyledLink
                            onClick={this.changeActiveMenu(2)}
                            active={this.state.active === 2 ? true : false}>Расписание</StyledLink>
                    </Link>
                </li>
                <li>
                    <Link to='/contacts'>
                        <StyledLink
                            onClick={this.changeActiveMenu(3)}
                            active={this.state.active === 3 ? true : false}>Контакты</StyledLink>
                    </Link>
                </li>
            </List>
        )
    }
};