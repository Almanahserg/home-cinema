import React from 'react';
import styled from 'styled-components';
import { UserIcon } from '../components/UserIcon'
import { UserInfo } from '../store/index';
import LogInModal from "./LogInModal";

const StyledLink = styled.div`
    margin: 0;
    color: #b5a551;
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


class Authorization extends React.Component {
    state = {
        showModal: false,
        color: "#b5a551"
    };

    toggleModal = () => {
        this.setState( {showModal: !this.state.showModal} );
    };


    changeIconColorToWhite = () => {
        this.setState( {color: 'white'} )
    };

    changeIconColorToGold = () => {
        this.setState( {color: "#b5a551"} )
    };

    render() {
        return (
            <div>
                <StyledLink
                    onMouseOver={ this.changeIconColorToWhite }
                    onMouseLeave={ this.changeIconColorToGold }
                    onClick={ this.toggleModal }>
                    <UserIcon color={ this.state.color }/>
                    { UserInfo.label }
                </StyledLink>
                { this.state.showModal && <LogInModal hideModal={ this.toggleModal }/> }
            </div>
        )
    }

}

export default Authorization;