import React from 'react';
import Link from './Link';
import styled from 'styled-components';

const List = styled.ul`
    margin: 0;
    
    li{
        display: inline;
    }
`;

class Menu extends React.Component {
    render() {
        return (
            <List>
                <li><Link text="Главная"/></li>
                <li><Link text="Фильмы"/></li>
                <li><Link text="Расписание"/></li>
            </List>
        )
    }
}

export default Menu;
