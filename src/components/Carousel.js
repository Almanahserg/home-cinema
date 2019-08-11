import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Cinema from '../contexts/Cinema';
import { Link } from "react-router-dom";

const CarouselTag = styled.div`
    position: relative;
    width: 80%;
    margin: 10px auto;
    padding: 20px;
    display: flex;
    align-items: top;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, .1);
    border-radius: 10px;
`;

const Gallery = styled.div`
    width: 100%;
    overflow: hidden;
    
    ul {
        height: 400px;
        width: 9999px;
        list-style: none;
        transition: 400ms;
        
        li {
            display: inline-block;
            vertical-align: top;
            margin: 0 40px;
        }
    }
`;

const Image = styled.div`
    width: 250px;
    height: 400px;
    border: 3px solid rgba(181, 165, 81, 0.5);
    border-radius: 20px;
    background-image: url(${ props => props.src });
    background-size: cover;
    background-position: center center;
`;

const Button = styled.div`
    display: flex;
    align-items: center;
    height: 450px;
    border: 1px solid rgba(255, 255, 255, .1);
    border-radius: 10px;
    transition: 500ms;
    
    &:hover{
        background-color: rgba(255, 255, 255, .1);
    }
`;

const ArrowNext = (props) => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
            fill={ `rgba(255, 255, 255, ${ props.opacity })` }
            style={ {transition: '500ms'} }
        >
            <path
                d="M845 1395l454-454q19-19 19-45t-19-45l-454-454q-19-19-45-19t-45 19l-102 102q-19 19-19 45t19 45l307 307-307 307q-19 19-19 45t19 45l102 102q19 19 45 19t45-19zm819-499q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
        </svg>
    )
};

const ArrowPrev = (props) => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
            fill={ `rgba(255, 255, 255, ${ props.opacity })` }
            style={ {transition: '500ms'} }
        >
            <path
                d="M1037 1395l102-102q19-19 19-45t-19-45l-307-307 307-307q19-19 19-45t-19-45l-102-102q-19-19-45-19t-45 19l-454 454q-19 19-19 45t19 45l454 454q19 19 45 19t45-19zm627-499q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
        </svg>
    )
};

const moveGallery = (props, countMovies) => {
    const carousel = document.getElementById( 'gallery' );
    const width = 340;

    let position = parseInt( carousel.style.marginLeft ) || 0;

    if(props === 'prev') {
        position += width * 3;
        position = Math.min( position, 0 );
        carousel.style.marginLeft = position + 'px';
    }

    if(props === 'next') {
        position -= width * 3;
        position = Math.max( position, -width * (countMovies - 3) );
        carousel.style.marginLeft = position + 'px';
    }
};

export const Carousel = () => {
    const movies = useContext( Cinema ).movies;
    const [opacityPrev, setOpacityPrev] = useState( 0.1 );
    const [opacityNext, setOpacityNext] = useState( 0.1 );

    return (
        <CarouselTag id='carousel'>
            <Button
                onMouseOver={ () => setOpacityPrev( 0.7 ) }
                onMouseLeave={ () => setOpacityPrev( 0.1 ) }
                onClick={ () => moveGallery( 'prev', movies.length ) }>
                <ArrowPrev opacity={ opacityPrev }/>
            </Button>
            <Gallery>
                <ul id='gallery'>
                    { movies.map( item => (
                        <li key={ item._id }>
                            <Link to={ `/movie_${ item._id }` } style={ {textDecoration: 'none'} }>
                                <div style={ {width: '260px'} }>
                                    <Image src={ item.poster }/>
                                    <p style={ {textAlign: 'center'} }>{ item.title }</p>
                                </div>
                            </Link>
                        </li>) ) }
                </ul>
            </Gallery>
            <Button
                onMouseOver={ () => setOpacityNext( 0.7 ) }
                onMouseLeave={ () => setOpacityNext( 0.1 ) }
                onClick={ () => moveGallery( 'next', movies.length ) }>
                <ArrowNext opacity={ opacityNext }/>
            </Button>
        </CarouselTag>
    )
};