import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import axios from "axios";
import { BASE_URL } from "../constants";

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
    width: 300px;
    height: ${ props => props.login ? '210px' : '370px' };
    background: white;
    border: 3px solid rgba(181, 165, 81, 0.5);
    padding: 10px;
    box-shadow: 0 0 5px #b5a551;
    transition: 500ms;
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

const Tab = styled.div`
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, .5);
    color: ${ props => props.active ? 'black' : 'gray' };
    background-color: ${ props => props.active ? 'white' : 'rgba(0, 0, 0, .1)' };
    border-radius: 7px 7px 0 0;
    cursor: pointer;
    z-index: 2;
    border-bottom: 0;
`;
const Div = styled.div`
    height: ${ props => props.active ? '180px' : '340px' };
    border: 1px solid rgba(0, 0, 0, .5);
    border-radius: 0 0 10px 10px;
    margin-top: -1px;
    z-index: 1;
    transition: 500ms;
`;

let modalRoot = document.createElement( 'div' );

const FormLogin = (props) => {
    const [email, setEmail] = useState( '' );
    const [password, setPassword] = useState( '' );

    const onChangeEmail = (event) => setEmail( event.target.value );
    const onChangePassword = (event) => setPassword( event.target.value );

    return (
        <form style={ {
            position: 'absolute',
            width: '280px',
            height: '150px',
            opacity: props.active ? '1' : '0',
            visibility: props.active ? 'visible' : 'hidden',
            display: 'grid',
            padding: '10px',
            transition: 'visibility 0s, opacity 300ms linear',
            transitionDelay: props.active ? '500ms' : '0ms'
        } }>
            <span>Email:</span>
            <input type="text" name="email" onChange={ onChangeEmail }/><br/>
            <span>Пароль:</span>
            <input type="password" name="password" onChange={ onChangePassword }/><br/>
            <div
                className='submitButton'
                onClick={ () => userLogin( props.actions, {email, password} ) }>
                Войти
            </div>
        </form>
    )
};

const FormRegistration = (props) => {
    const [email, setEmail] = useState( '' );
    const [firstName, setFirstName] = useState( '' );
    const [lastName, setLastName] = useState( '' );
    const [password, setPassword] = useState( '' );
    const [confirmPassword, setConfirmPassword] = useState( '' );

    let user = {
        email,
        firstName,
        lastName,
        password,
        confirmPassword
    };

    const onChangeEmail = (event) => setEmail( event.target.value );
    const onChangeFirstName = (event) => setFirstName( event.target.value );
    const onChangeLastName = (event) => setLastName( event.target.value );
    const onChangePassword = (event) => setPassword( event.target.value );
    const onChangeConfirmPassword = (event) => setConfirmPassword( event.target.value );

    return (
        <form style={ {
            position: 'absolute',
            width: '280px',
            height: '250px',
            opacity: props.active ? '1' : '0',
            visibility: props.active ? 'visible' : 'hidden',
            display: 'grid',
            padding: '10px',
            transition: 'visibility 0s, opacity 300ms linear',
            transitionDelay: props.active ? '500ms' : '0ms'
        } }>
            <span>Email:</span>
            <input type="text" name="email" onChange={ onChangeEmail }/><br/>
            <span>Имя:</span>
            <input type="text" name="firstName" onChange={ onChangeFirstName }/><br/>
            <span>Фамилия:</span>
            <input type="text" name="lastName" onChange={ onChangeLastName }/><br/>
            <span>Придумайте пароль:</span>
            <input type="password" name="password" onChange={ onChangePassword }/><br/>
            <span>Повторите пароль:</span>
            <input type="password" name="confirmPassword" onChange={ onChangeConfirmPassword }/><br/>
            <div
                className='submitButton'
                onClick={ () => userRegistration( props.actions, user ) }>
                Зарегистрироватся
            </div>
        </form>
    )
};

const userRegistration = (actions, user) => {
    const passwordIsValid = user.password === user.confirmPassword;

    if (passwordIsValid) {
        axios.post( `${ BASE_URL }/auth/register`, user )
            .then( data => {
                actions.setCookie( 'user', data.data.user.local );
            })
            .catch( error => console.error( error ) )
    }

};

const userLogin = (actions, user) => {
    axios.post( `${ BASE_URL }/auth/login`, user )
        .then( data => {
            actions.setCookie( 'user', data.data.user.local );
            actions.hideModal();
        } )
        .catch( error => {
            alert( 'Неверно введены данные авторизации' );
            console.error( error );
        } )
};

export const LogInModal = (props) => {
    const [active, setActive] = useState( true );
    const [cookies, setCookie] = useCookies( ['user'] );

    useEffect( () => {
        document.querySelector( 'body' ).appendChild( modalRoot );
        return () => modalRoot.remove()
    }, [] );

    const actionsObj = {
        setCookie: setCookie,
        hideModal: props.hideModal
    };

    return (
        ReactDOM.createPortal(
            <ModalTag>
                <Content login={ active }>
                    <CloseButton onClick={ actionsObj.hideModal }>{ "\u2715" }</CloseButton>
                    <div style={ {display: 'flex'} }>
                        <Tab active={ active } onClick={ () => setActive( true ) }>Вход</Tab>
                        <Tab active={ !active } onClick={ () => setActive( false ) }>Регистрация</Tab>
                    </div>
                    <Div active={ active }>
                        <FormLogin active={ active } actions={ actionsObj }/>
                        <FormRegistration active={ !active } actions={ actionsObj }/>
                    </Div>
                </Content>
            </ModalTag>,
            modalRoot
        )
    );
};