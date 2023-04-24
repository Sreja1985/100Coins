import React from 'react';
import './Cards.css';
import {Link} from 'react-router-dom';

function Card(props) {
  return (
    <article className='card'>
      <Link className='card__link' to={props.url}>
        <figure className='coin__image'>
            <img alt={props.alt} src={props.image} />
        </figure>
        <div>
            <h4 className='coin__name'>{props.name} </h4>
            <p className='coin__price'>{props.price} $</p>
        </div>
        </Link>
    </article>
  )
}

export default Card
