import React from 'react';
import logo from '../imgs/logo.png'
import { Menu } from './Menu'

import styled from 'styled-components';
import Authorization from "./Authorization";

const Img = styled.img`
    height: 40px;
    width: auto;
`;

const Container = styled.div`
    width: 80%;
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
`;

class Header extends React.Component {
    render() {
        return (
            <header>
                <Container>
                    <Img src={ logo } alt="logo"/>
                    <Menu/>
                    <Authorization/>
                </Container>
            </header>
        )
    }
}

export default Header;
