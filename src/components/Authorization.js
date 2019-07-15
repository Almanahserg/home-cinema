import React from 'react';
import Modal from 'react-bootstrap/Modal'

import styled from 'styled-components';

import user_gold from "../imgs/user_gold.svg";
import user_white from "../imgs/user_white.svg";

import Login from './Login'

const StyledLink = styled.div`
    margin: 0;
    color: #b5a551;
    display: inline-block;
    padding: 10px 15px;
        
    &:hover {
        color: white;
        transition: .5s;
        background-color: red;
        cursor: pointer;
                            
        img {
            content: url('${user_white}'); 
        }
    }
                        
    img{
        margin-top: -5px;
        margin-right: 5px;
        content: url('${user_gold}');
    }
`;


class Authorization extends React.Component {
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    render() {
        return (
            <div>
                <StyledLink onClick={this.handleShow}>
                    {<img alt="user"/>}
                    {"Личный кабинет"}
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