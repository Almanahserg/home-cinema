import React from 'react'
import {data as films} from '../data/data'



const List = ({film}) => {
    const {
        name,
        description,
        img
    } = film;

    return (
        <li>
            <div>{name}</div>
            <img src={img} alt={name}/>
            <div>{description}</div>
        </li>
    )
};

export const ListValue = () => {
    return (
        <ul>
            {films.map(item => <List key={item.id} film={item}/>)}
        </ul>
    )

};