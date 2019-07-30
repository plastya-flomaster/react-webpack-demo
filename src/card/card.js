import React from 'react';
import './card.css';

const Card = (props) => {
    return (
        <div className='card-body'>
            <img className='image' src={props.image} alt={props.description}></img>
            <h1>{props.category}</h1>
            <h2>{props.text}</h2>
        </div>
    )
};
Card.defaultProps = {
    description: 'картинка',
    category: 'название рубрики',
    text: 'Заголовок'
};
export default Card;
