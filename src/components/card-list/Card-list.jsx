import React from 'react';
import './card-list.style.css';
import { Card } from '../card/Card'

export const CardList = (props) => {
    return (
        <div className='card-list'>
            {props.monsters.map(monster => (
                <Card key={monster.id} monster={monster}></Card>
            ))}
        </div>
    )
}

