import React from 'react';
import styled from 'styled-components';
import { store } from '../store/index';
import Schedule from "./Schedule";

const Img = styled.img`
    width: 200px;
    height: auto;
    border: 3px solid rgba(181, 165, 81, 0.5);
    border-radius: 20px;
    margin: 8px;
`;

const Gallery = styled.div`
    width: 80%;
    margin: auto;  
`;

const Movie = styled.div`
    background-color: rgb(24, 37, 51);
    box-shadow: 0 0 5px #b5a551;
    margin: 10px auto;
    border-radius: 20px;
    display: flex;
    >div{
        float: left;
    }
`;

const Span = styled.span`
    padding-right: 10px;
`;

const AgeLimit = styled.span`
    position: absolute;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    border: 1px solid white;
    box-shadow: 0 0 7px black;
    color: #0e1621;
    background-color: rgba(255, 255, 255, 0.5);
    display: flax;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    transform: translateX(-45px) translateY(-20px);
`;

class ListFilms extends React.Component {
    render() {
        return (
            <div>
                <Gallery>
                    { store.getState().cinemaData.movies.map( (item) =>
                        <Movie key={ item._id }>
                            <div>
                                <Img src={ item.poster } alt={ 'img_' + item._id.slice( 0, 6 ) }/>
                            </div>
                            <div style={{margin: '8px'}}>
                                <h2>{ item.title }</h2>
                                <div>
                                    <AgeLimit>{item.age}+</AgeLimit>
                                    <Span>[{ new Date( item.rentStart ).getFullYear() }]</Span>
                                    <Span>[{ item.country.join( ", " ) }]</Span>
                                    <Span>[{ item.genre.join( ", " ) }]</Span>
                                </div><br/>
                                <div>
                                    <Schedule movieId={item._id}/>
                                </div>
                            </div>
                        </Movie>
                    ) }
                </Gallery>
            </div>
        )
    }
}

export default ListFilms