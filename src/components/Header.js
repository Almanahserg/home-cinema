import React, { useState } from 'react';
import logo from '../imgs/logo.png'
import { Menu } from './Menu'
import styled from 'styled-components';
import Authorization from "./Authorization";
import { Link } from "react-router-dom";

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

const Header = () => {
    const [activeMenu, setActiveMenu] = useState( 0 );

    return (
        <header>
            <Container>
                <Link to={ '/' } onClick={() => setActiveMenu (0)}>
                    <Img src={ logo } alt="logo"/>
                </Link>
                <Menu activeMenu={activeMenu} changeActiveMenu={setActiveMenu}/>
                <Authorization activeMenu={activeMenu} changeActiveMenu={setActiveMenu}/>
            </Container>
        </header>
    )
};

export default Header;
