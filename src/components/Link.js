import React from 'react';
import styled from 'styled-components';

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

class Link extends React.Component {
    state = {
        text: "ссылка"
    };

    render() {
        return (
            <StyledLink onClick={() => {
                this.setState({text: "Сылка новая"});
            }}>
                {this.props.text}
            </StyledLink>
        )
    }
}

export default Link