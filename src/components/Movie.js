import React, { useState, useContext } from 'react';
import Cinema from '../contexts/Cinema';
import styled from "styled-components";
import MovieTrailer from "./MovieTrailer";
import Sessions from "./Sessions";

const Image = styled.div`
    width: 300px;
    height: 500px;
    border: 3px solid rgba(181, 165, 81, 0.5);
    border-radius: 20px;
    margin: 8px;
    background-image: url(${ props => props.src });
    background-size: cover;
    background-position: center center;
`;

const PlayButtonStyle = styled.div`
    margin: 10px 0;
    width: 200px;
    border: 1px solid white;
    border-radius: 5px;
    text-align: center;
    padding: 5px;
    transition: .5s;
    color: #b5a551;
    cursor: pointer;
    &:hover {
        color: white;
        background-color: red;
    }
`;
const PlayButton = (props) => (
    <PlayButtonStyle onClick={ props.onClick }>
        <svg id="Play" xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 60 60" fill="#ffffff">
            <g>
                <path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30
		c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15
		C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"/>
                <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
		S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"/>
            </g>
        </svg>
        <div>Смотреть трейлер</div>
    </PlayButtonStyle>
);

export const Movie = ({match}) => {
    const movies = useContext( Cinema ).movies;
    const sessions = useContext( Cinema ).sessions;
    const movie = movies.filter( item => item._id === match.params.movieId )[0] || [];
    const [showModal, setShowModal] = useState( false );



    let genre, country, actors, sessionTag;
    if(movies.length > 0) {
        sessionTag = <Sessions movieId={ movie._id } sessions={ sessions }/>;
        genre = movie.genre.filter( (e) => !!e ).join( ', ' );
        country = movie.country.filter( (e) => !!e ).join( ', ' );
        actors = movie.actorsWiki.length > 0
            ? movie.actorsWiki.map( item => (
                <div key={ item._id } style={ {
                    marginRight: '5px',
                    width: '110px',
                    display: 'inline-block',
                    verticalAlign: 'top'
                } }>
                    <div style={ {
                        width: '90px',
                        height: '100px',
                        backgroundImage: 'url(' + item.img + ')',
                        backgroundSize: 'cover',
                        margin: 'auto'
                    } }/>
                    <div style={ {textAlign: 'center'} }>{ item.fullName }</div>
                </div>
            ) )
            : movie.actors.filter( (e) => !!e ).join( ', ' );
    }

    const handleClickPlayButton = () => (
        setShowModal( !showModal )
    );

    return (
        <div style={ {width: '80%', margin: 'auto', display: 'flex'} }>
            <div>
                <Image src={ movie.poster }/>
            </div>
            <div style={ {margin: '8px'} }>
                <h2>{ movie.title }</h2>
                <hr/>
                <p>Жанр: { genre }</p>
                <hr/>
                <p>Страна: { country }</p>
                <hr/>
                <p>{ movie.description }</p>
                <hr/>
                <p>Актеры:</p>
                <div style={ {display: 'inline'} }>{ actors }</div>
                <hr/>
                <div><PlayButton onClick={ handleClickPlayButton }/></div>
                { showModal && <MovieTrailer hideModal={ handleClickPlayButton } movieTrailer={ movie.trailer }/> }
                <br/>
                <p>Сеансы:</p>
                { sessionTag }
            </div>
        </div>
    )

};