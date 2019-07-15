import React from 'react';
import logo from '../imgs/logo.png'
import Menu from './Menu'
import {Container, Row, Col} from 'react-bootstrap';

import styled from 'styled-components';
import Authorization from "./Authorization";

const Img = styled.img`
    height: 40px;
    width: auto;
`;

class Nav extends React.Component {
    render() {
        return (
            <Container fluid className="dark-color">
                <Row noGutters>
                    <Col lg={3}><Img src={logo} alt="logo"/></Col>
                    <Col lg={6}><Menu/></Col>
                    <Col lg={2} className="text-right"><Authorization/></Col>
                    <Col/>
                </Row>
            </Container>
        )
    }
}

export default Nav;
