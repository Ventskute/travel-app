import React from 'react';
import { Link } from "react-router-dom";

import './Card.scss';

export default function Card({name, capital, image}) {
  return (
    <Link to={`/${name}`} className='card-link'>
      <div className='card' style={{backgroundImage: `url(${image})`}}>
        <h2>{name}</h2>
        <h4>{capital}</h4>
      </div>
    </Link>
  )
}