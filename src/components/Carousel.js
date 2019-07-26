import React from 'react';
import styled from 'styled-components';
import {ReactComponent as ArrowRight} from '../imgs/arrowRightCarousel.svg';

const Carousel = styled.div`
    height: 400px;
`;

const Gallery = styled.div`
    margin: auto;
    height: 100%;
    width: 90%;
    overflow: hidden;
    
    ul{
        border: 1px solid red;
        margin: 0;
        padding: 0;
        font-size: 0;
        width: 100%; 
        height: 100%;  
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
`;

const Img = styled.img`
        width: 200px;
        height: 300px;
    `;


const List = ({movie, params}) => {
    const {img} = movie;

    const Li = styled.li`
        margin: 0 ${params.counter === 0 ? "-7" : params.counter}5px;
        z-index: ${params.counter};
        display: ${(params.counter < 0) ? 'none' : ''}
        
    `;

    console.log(params.counter);

    return (
        <Li>
            <Img src={img} alt={"name"} style={{transform: `scale(1.${params.counter})`}}/>
        </Li>
    )
};


export const ListFilms = () => {
    let counter = 0;

    return (
        <Carousel>
            <Gallery>
                <ul>
                    {films.map((item, index) =>
                        <List
                            key={item.id}
                            movie={item}
                            params={{
                                index: index,
                                counter: (index <= 1) ? counter++: counter--
                            }}
                        />
                    )}
                </ul>
            </Gallery>
            <ArrowRight onClick={() => console.log(counter++)}/>
        </Carousel>
    )
};