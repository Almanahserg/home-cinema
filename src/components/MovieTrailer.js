import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

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
    width: 800px;
    height: 500px;
    background: white;
    border: 3px solid rgba(181, 165, 81, 0.5);
    padding: 10px;
    box-shadow: 0 0 5px #b5a551;
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



class MovieTrailer extends React.Component {
    componentWillMount() {
        this.modalRoot = document.createElement( 'div' );
        document.querySelector( 'body' ).appendChild( this.modalRoot );
    }

    componentWillUnmount() {
        this.modalRoot.remove();
    }

    render() {
        return (
            ReactDOM.createPortal(
                <ModalTag>
                    <Content>
                        <CloseButton onClick={ this.props.hideModal }>{ "\u2715" }</CloseButton>
                        <iframe
                            style={ {height: '100%', width: '100%'} }
                            src={ this.props.movieTrailer }
                            title='movie'>
                        </iframe>
                    </Content>

                </ModalTag>,
                this.modalRoot
            )
        );
    }
}

export default MovieTrailer