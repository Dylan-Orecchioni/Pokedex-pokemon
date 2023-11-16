import React from 'react';
import './Card.scss';

const Card = () => {
    return (
        <div className='card'>
            <div className='card-header'>
                <img src='https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/248/regular.png' alt='image pokemon'/>
            </div>

            <div className='card-body'>
                <h2>Name du pokemon</h2>
                <div className='types'>
                    <img src='https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/roche.png' alt='image pokemon'/>
                </div>
            </div>
        </div>
    );
};

export default Card;