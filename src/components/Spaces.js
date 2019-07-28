import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { store } from '../store/index'

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
    height: 400px;
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

const InformBoard = styled.div`
    height: 200px;
    width: 300px;
    border: 1px solid blue;
    margin: auto;
`;

const CinemaHall = styled.div`
    height: 200px;
    width: 400px;
    border: 1px solid red;
    transform: perspective(300px) rotate3d(1, 0, 0, 50deg);
    margin: -30px auto;
    // display: flex;
    // align-items: center;
    // justify-content: center;
`;

const Places = () => {
    let cinemaHall = store.getState().cinemaData.spaces.filter( item => {
        return (
            item.room === '5c9d43e6952777ad64e19243'
        )
    } );

    cinemaHall.sort( (a, b) => (
        (a.row - b.row) === 0 ? (a.place - b.place) : (a.row - b.row)
    ) );

    // let sinemaObj = {};
    // cinemaHall.forEach(item => {
    //     sinemaObj[item.row.toString()].push('1');
    // });

    // console.log(sinemaObj);

    return (
        cinemaHall.map( item => (
                <div style={ {
                    margin: '3px 8px',
                    width: '20px',
                    height: '20px',
                    border: '1px solid red',
                    float: 'left'
                } }>
                    { item.place }
                </div>
            )
        ))
};

class Spaces extends React.Component {
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
                        <InformBoard/>
                        <CinemaHall>
                            <Places/>
                        </CinemaHall>
                    </Content>

                </ModalTag>,
                this.modalRoot
            )
        );
    }
}

export default Spaces