import React, { useState } from 'react';
import styled from 'styled-components';
import { UserIcon } from '../components/UserIcon'
import { LogInModal } from "./LogInModal";
import { useCookies } from 'react-cookie';
import { Link } from "react-router-dom";

const StyledLink = styled.div`
    margin: 0;
    color: ${ props => props.active === true ? 'white' : '#b5a551' };
    background-color: ${ props => props.active === true ? 'red' : 'none' };
    display: inline-block;
    padding: 14px 15px;
    transition: .5s;
    display: flex;
    align-items: center;
    justify-content: center;
        
    &:hover {
        color: white;
        background-color: red;
        cursor: pointer;
    }
`;


const Authorization = (props) => {
    const [cookies] = useCookies( ['user'] );
    const [showModal, setShowModal] = useState( false );
    const [colorIcon, setColorIcon] = useState( '#b5a551' );

    // console.log(cookies);

    const toggleShowModal = () => setShowModal( !showModal );

    const content = (user) => {
        let fullName = user.hasOwnProperty( 'lastName' )
            ? user.firstName + " " + user.lastName
            : user.firstName;


        return (
            <StyledLink
                onMouseOver={ () => setColorIcon( 'white' ) }
                onMouseLeave={ () => setColorIcon( '#b5a551' ) }
                active={ props.activeMenu === 3 ? true : false }
                onClick={
                    user.hasOwnProperty( 'lastName' )
                        ? () => props.changeActiveMenu( 3 )
                        : toggleShowModal }
            >
                <UserIcon color={  props.activeMenu === 3 ? 'white' : colorIcon }/>
                { fullName }
            </StyledLink>
        )
    };

    return (
        <div>
            { cookies.user !== 'undefined'
                ? <Link to='/user' style={ {textDecoration: 'none'} }>{ content( cookies.user ) }</Link>
                : content( {firstName: 'Личный кабинет'} )
            }
            { showModal && <LogInModal hideModal={ toggleShowModal }/> }
        </div>
    )
};

export default Authorization;