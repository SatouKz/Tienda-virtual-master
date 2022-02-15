import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({producto}) => {
  return (
    <div className="card">
      <Link key={producto.id} to={`/products/${producto.id}`}>
        <img src={producto.imagen} alt="imagen" />
      </Link>
     <div className="card-text">
        <Link key={producto.id} to={`/products/${producto.id}`}>
          {producto.tittle}
        </Link>
        <p>⭐⭐⭐⭐⭐</p>
        <h3>{producto.price}</h3>
     </div>
    </div>
  )
}

export default Card;