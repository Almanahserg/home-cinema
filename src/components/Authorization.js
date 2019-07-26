import React from 'react';
import Modal from 'react-bootstrap/Modal'

import styled from 'styled-components';

import {UserIcon} from '../components/UserIcon'
import {COLOR, UserInfo} from '../store/index';

import Login from './Login'


const StyledLink = styled.div`
    margin: 0;
    color: #b5a551;
    display: inline-block;
    padding: 8px 15px;
    transition: .5s;
        
    &:hover {
        color: white;
        background-color: red;
        cursor: pointer;
    }
`;


class Authorization extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            color: COLOR.gold
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.changeIconColorToWhite = this.changeIconColorToWhite.bind(this);
        this.changeIconColorToGold = this.changeIconColorToGold.bind(this);
    }

    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    changeIconColorToWhite() {
            this.setState({color: COLOR.white})
    }

    changeIconColorToGold() {
            this.setState({color: COLOR.gold})
    }

    render() {
        return (
            <div>
                <StyledLink onMouseOver={this.changeIconColorToWhite} onMouseLeave={this.changeIconColorToGold}>
                    <UserIcon color={this.state.color}/>
                    {UserInfo.label}
                </StyledLink>

                <Modal show={this.state.show} onHide={this.handleClose} className='modal-dialog modal-sm'>
                    <Modal.Header closeButton>
                        <Modal.Title>Авторизация</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Login/></Modal.Body>
                    <Modal.Footer>
                        <button onClick={this.handleClose}>Войти</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

}

export default Authorization;