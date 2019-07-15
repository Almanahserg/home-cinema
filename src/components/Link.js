import React from 'react';
import styled from 'styled-components';

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
    }
`;

class Link extends React.Component {
    render() {
        return (
            <StyledLink onClick={this.handleClick}>
                {this.props.text}
            </StyledLink>
        )
    }
}

export default Link